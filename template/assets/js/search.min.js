$(document).ready(function () {
    const INDEX_URL = "/search.json";
    const MIN_CHARS = 2;
    const MAX_RESULTS = 12;
    const DEBOUNCE_MS = 120;

    const $host = $("#site-search");
    const $box = $("#searchBox");
    const $popup = $("#searchPopup");
    const $meta = $("#searchMeta");
    const $results = $("#searchResults");
    const $empty = $("#searchEmpty");

    if (!$host.length || !$box.length || !$popup.length || !$meta.length || !$results.length || !$empty.length) return;

    // ---------------- Overlay blur (between page and search) ----------------
    const SEARCH_BLUR_ID = "search-blur-overlay";
    const SEARCH_BLUR_Z = 1045; // overlay
    const SEARCH_BOX_Z = 1046;  // search box + popup

    (function injectSearchBlurOverlayCss() {
        if (document.getElementById("search-blur-overlay-css")) return;

        const css = `
#${SEARCH_BLUR_ID}{
  position: fixed;
  inset: 0;
  z-index: ${SEARCH_BLUR_Z};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(0,0,0,.12); /* optional tint */
  display: none;
}

#site-search.search-spotlight{
  position: relative;
  z-index: ${SEARCH_BOX_Z};
}

/* ensure popup stays above overlay even if moved/ported */
#searchPopup{ z-index: ${SEARCH_BOX_Z}; }
`;
        const style = document.createElement("style");
        style.id = "search-blur-overlay-css";
        style.textContent = css;
        document.head.appendChild(style);
    })();

    function ensureSearchBlurOverlay() {
        let el = document.getElementById(SEARCH_BLUR_ID);
        if (el) return el;

        el = document.createElement("div");
        el.id = SEARCH_BLUR_ID;
        document.body.appendChild(el);

        // click overlay closes
        el.addEventListener("click", () => hide());
        return el;
    }

    function enableSearchBlurOverlay() {
        ensureSearchBlurOverlay().style.display = "block";
        $host.addClass("search-spotlight");
    }

    function disableSearchBlurOverlay() {
        const el = document.getElementById(SEARCH_BLUR_ID);
        if (el) el.style.display = "none";
        $host.removeClass("search-spotlight");
    }

    // ---------------- Search data + indices ----------------
    let pages = [];
    let heads = [];

    let byPage = new Map(); // url -> page
    let byHead = new Map(); // ref(url#id) -> heading

    let idxPages = null;
    let idxHeads = null;
    let loading = null;

    function show() { $popup.addClass("show").show(); }
    function clear() { $results.empty(); $empty.hide(); }

    function hide() {
        $popup.removeClass("show").hide();
        disableSearchBlurOverlay();
    }

    function esc(s) {
        return (s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }

    function normalizeHref(u) {
        if (!u) return "#";
        if (/^https?:\/\//i.test(u) || u.startsWith("/") || u.startsWith("#")) return u;
        return "/" + u.replace(/^\.\//, "");
    }

    function splitTerms(q) {
        return (q || "").trim().split(/\s+/).filter(Boolean);
    }

    function cleanSearchText(input) {
        const raw = String(input ?? "");
        const withoutComments = raw.replace(/<!--[\s\S]*?-->/g, " ");
        const withoutTags = withoutComments.replace(/<[^>]+>/g, " ");
        const decoder = document.createElement("textarea");
        decoder.innerHTML = withoutTags;
        return (decoder.value || decoder.textContent || "")
            .replace(/\s+/g, " ")
            .trim();
    }

    function highlight(s, q) {
        s = cleanSearchText(s);
        const terms = splitTerms(q).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        if (!terms.length) return esc(s);
        const re = new RegExp(`(${terms.join("|")})`, "ig");
        return esc(s).replace(re, '<mark class="p-0">$1</mark>');
    }

    function snippet(text, q, maxLen = 160) {
        const t = cleanSearchText(text);
        if (!t) return "";

        const hay = t.toLowerCase();
        const terms = splitTerms(q).map(x => x.toLowerCase());

        let i = -1;
        for (const term of terms) {
            const j = term ? hay.indexOf(term) : -1;
            if (j >= 0 && (i < 0 || j < i)) i = j;
        }

        if (i < 0) return t.length > maxLen ? (t.slice(0, maxLen - 1) + "…") : t;

        const start = Math.max(0, i - Math.floor(maxLen / 2));
        const end = Math.min(t.length, start + maxLen);
        let out = t.slice(start, end);
        if (start > 0) out = "…" + out;
        if (end < t.length) out += "…";
        return out;
    }

    function escapeLunrTerm(term) {
        // lunr reserved: + - && || ! ( ) { } [ ] ^ " ~ * ? : \ /
        return term.replace(/[\+\-\&\|\!\(\)\{\}\[\]\^"~\*\?:\\\/]/g, "\\$&");
    }

    function buildRequiredQuery(input, useWildcard) {
        const terms = splitTerms(input).map(escapeLunrTerm);
        return terms.map(t => {
            const wc = (useWildcard && t.length >= 3) ? "*" : "";
            return `+${t}${wc}`;
        }).join(" ");
    }

    function mergeResults(a, b) {
        const m = new Map(); // ref -> best result
        for (const r of a || []) m.set(String(r.ref), r);
        for (const r of b || []) {
            const k = String(r.ref);
            const prev = m.get(k);
            if (!prev || (r.score ?? 0) > (prev.score ?? 0)) m.set(k, r);
        }
        return Array.from(m.values()).sort((x, y) => (y.score ?? 0) - (x.score ?? 0));
    }

    function searchIndex(idx, q) {
        let exactReq = [];
        let plain = [];
        let wildReq = [];

        try { exactReq = idx.search(buildRequiredQuery(q, false)); } catch { exactReq = []; }

        // If required-exact yields nothing, let Lunr parse normally.
        if (!exactReq.length) {
            try { plain = idx.search(q); } catch { plain = []; }
        }

        // Wildcards supplement/rescue.
        if ((exactReq.length + plain.length) < MAX_RESULTS) {
            try { wildReq = idx.search(buildRequiredQuery(q, true)); } catch { wildReq = []; }
        }

        return mergeResults(mergeResults(exactReq, plain), wildReq);
    }

    function toHeadsFromPages(pagesArr) {
        const out = [];
        for (const p of pagesArr) {
            const hlist = p.headings || p.Headings || [];
            for (const h of hlist) {
                const hid = h.id || h.Id;
                const htext = h.text || h.Text;
                if (!hid || !htext) continue;

                out.push({
                    ref: `${p.url}#${hid}`,
                    pageUrl: String(p.url),
                    pageTitle: p.title || p.url,
                    hive: p.hive || "",
                    hid: String(hid),
                    htext: String(htext),
                    level: Number(h.level || h.Level || 0),
                    ctx: (h.ctx ?? h.Ctx ?? "") + ""
                });
            }
        }
        return out;
    }

    async function ensureLoaded() {
        if (idxPages && idxHeads) return;
        if (loading) return loading;

        loading = (async () => {
            try {
                $meta.text("Loading search…");
                show();

                const data = await $.getJSON(INDEX_URL);

                // Accept:
                // - old: [ {url,title,text,...}, ... ]
                // - new: { pages: [...], heads: [...] }
                // - new: { pages: [...] } with page.headings[]
                pages = (Array.isArray(data) ? data : (data.pages || [])).map(p => ({
                    ...p,
                    url: String(p.url || ""),
                    title: cleanSearchText(p.title || ""),
                    hive: cleanSearchText(p.hive || ""),
                    text: cleanSearchText(p.text || "")
                }));
                byPage = new Map(pages.map(p => [String(p.url), p]));

                heads = (!Array.isArray(data) && Array.isArray(data.heads))
                    ? data.heads.map(h => ({
                        ref: String(h.ref || `${h.pageUrl}#${h.hid || h.id}`),
                        pageUrl: String(h.pageUrl),
                        pageTitle: cleanSearchText(h.pageTitle || ""),
                        hive: cleanSearchText(h.hive || ""),
                        hid: String(h.hid || h.id || ""),
                        htext: cleanSearchText(h.htext || h.text || ""),
                        level: Number(h.level || 0),
                        ctx: cleanSearchText(h.ctx ?? "")
                    }))
                    : toHeadsFromPages(pages).map(h => ({
                        ...h,
                        pageTitle: cleanSearchText(h.pageTitle || ""),
                        hive: cleanSearchText(h.hive || ""),
                        htext: cleanSearchText(h.htext || ""),
                        ctx: cleanSearchText(h.ctx || "")
                    }));

                byHead = new Map();
                for (const h of heads) {
                    if (!h.ref) h.ref = `${h.pageUrl}#${h.hid}`;
                    byHead.set(String(h.ref), h);
                }

                idxPages = lunr(function () {
                    this.ref("url");
                    this.field("title", { boost: 10 });
                    this.field("hive", { boost: 3 });
                    this.field("text");

                    for (const p of pages) {
                        this.add({
                            url: String(p.url),
                            title: p.title || "",
                            hive: p.hive || "",
                            text: p.text || ""
                        });
                    }
                });

                idxHeads = lunr(function () {
                    this.ref("ref");
                    this.field("htext", { boost: 10 });
                    this.field("pageTitle", { boost: 4 });
                    this.field("hive", { boost: 2 });
                    this.field("ctx");

                    for (const h of heads) {
                        this.add({
                            ref: String(h.ref),
                            htext: h.htext || "",
                            pageTitle: h.pageTitle || "",
                            hive: h.hive || "",
                            ctx: h.ctx || ""
                        });
                    }
                });

                $meta.text("Type to search");
            } catch {
                idxPages = null;
                idxHeads = null;
                pages = [];
                heads = [];
                byPage = new Map();
                byHead = new Map();
                clear();
                $meta.text("Search unavailable");
            }
        })().finally(() => { loading = null; });

        return loading;
    }

    function interleave(pageMatches, headMatches) {
        const out = [];
        const p = pageMatches || [];
        const h = headMatches || [];
        let i = 0, j = 0;

        // Headings first (more specific), then pages.
        while (out.length < MAX_RESULTS && (i < h.length || j < p.length)) {
            if (i < h.length) out.push({ kind: "head", m: h[i++] });
            if (out.length >= MAX_RESULTS) break;
            if (j < p.length) out.push({ kind: "page", m: p[j++] });
        }
        return out.slice(0, MAX_RESULTS);
    }

    function render(query, pageMatches, headMatches) {
        clear();

        const totalPages = (pageMatches || []).length;
        const totalHeads = (headMatches || []).length;
        const total = totalPages + totalHeads;

        if (!total) {
            $empty.show();
            $meta.text(`No results for "${query}"`);
            return;
        }

        const shown = interleave(pageMatches, headMatches);

        const parts = [];
        if (totalHeads) parts.push(`${totalHeads} heading${totalHeads === 1 ? "" : "s"}`);
        if (totalPages) parts.push(`${totalPages} page${totalPages === 1 ? "" : "s"}`);

        if (total <= MAX_RESULTS) {
            $meta.text(`${total} result${total === 1 ? "" : "s"} (${parts.join(", ")}) for "${query}"`);
        } else {
            $meta.text(`Showing ${shown.length} of ${total} results (${parts.join(", ")}) for "${query}"`);
        }

        for (const item of shown) {
            if (item.kind === "page") {
                const d = byPage.get(String(item.m.ref));
                if (!d) continue;

                const href = normalizeHref(d.url);
                const title = d.title || d.url;
                const hive = d.hive || "";

                const $a = $(`
                    <a class="list-group-item list-group-item-action" href="${esc(href)}" role="option" data-kind="page">
                      <div class="d-flex justify-content-between gap-3">
                        <div class="fw-semibold">${highlight(title, query)}</div>
                        ${hive ? `<div class="small text-secondary text-nowrap">${esc(hive)}</div>` : ""}
                      </div>
                      <div class="small text-secondary">${highlight(snippet(d.text || "", query), query)}</div>
                    </a>
                    <hr>
                `);

                $a.on("click", () => hide());
                $results.append($a);
                continue;
            }

            const hdoc = byHead.get(String(item.m.ref));
            if (!hdoc) continue;

            const page = byPage.get(String(hdoc.pageUrl));
            const pageTitle = (hdoc.pageTitle || page?.title || hdoc.pageUrl);
            const hive = (hdoc.hive || page?.hive || "");

            const href = normalizeHref(hdoc.pageUrl) + "#" + encodeURIComponent(hdoc.hid);
            const headTitle = hdoc.htext || hdoc.hid;

            const ctxLine = hdoc.ctx ? snippet(hdoc.ctx, query) : "";

            const $a = $(`
                <a class="list-group-item list-group-item-action" href="${esc(href)}" role="option" data-kind="heading">
                  <div class="d-flex justify-content-between gap-3">
                    <div class="fw-semibold">${highlight(headTitle, query)}</div>
                    ${hive ? `<div class="small text-secondary text-nowrap">${esc(hive)}</div>` : ""}
                  </div>
                  <div class="small text-secondary">
                    <span class="text-muted">${esc(pageTitle)}</span>
                    ${ctxLine ? `  -  ${highlight(ctxLine, query)}` : ""}
                  </div>
                </a>
                <hr>
            `);

            $a.on("click", () => hide());
            $results.append($a);
        }
    }

    function search(query) {
        query = (query || "").trim();

        if (query.length < MIN_CHARS) {
            clear();
            $meta.text(query.length ? `Type at least ${MIN_CHARS} characters` : "Type to search");
            return;
        }

        if (!idxPages || !idxHeads) {
            clear();
            $meta.text("Search unavailable");
            return;
        }

        const pageMatches = searchIndex(idxPages, query);
        const headMatches = searchIndex(idxHeads, query);

        render(query, pageMatches, headMatches);
    }

    function debounce(fn, ms) {
        let t = 0;
        return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
    }

    const onInput = debounce(async () => {
        const q = ($box.val() || "").trim();

        if (q.length < MIN_CHARS) {
            clear();
            $meta.text(q.length ? `Type at least ${MIN_CHARS} characters` : "Type to search");
            show();
            return;
        }

        await ensureLoaded();
        show();
        search(q);
    }, DEBOUNCE_MS);

    $box.on("focus", async () => {
        enableSearchBlurOverlay();

        const q = ($box.val() || "").trim();
        if (q.length >= MIN_CHARS) await ensureLoaded();

        show();
        search(q);
    });

    // Close when focus leaves the whole search host (input + popup)
    $box.on("blur", () => {
        setTimeout(() => {
            const ae = document.activeElement;
            if (!$host[0].contains(ae)) hide();
        }, 0);
    });

    $box.on("input", onInput);

    $(document).on("click", (e) => {
        if (!$host[0].contains(e.target)) hide();
    });

    $box.on("keydown", (e) => {
        if (e.key === "Escape") { hide(); return; }

        const $items = $results.find("a.list-group-item");
        if (!$items.length) return;

        const $active = $items.filter(".active");
        let idxActive = $active.length ? $items.index($active) : -1;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            idxActive = Math.min($items.length - 1, idxActive + 1);
            $items.removeClass("active");
            $items.eq(idxActive).addClass("active")[0].scrollIntoView({ block: "nearest" });
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            idxActive = Math.max(0, idxActive - 1);
            idxActive = Math.min(idxActive, $items.length - 1);
            $items.removeClass("active");
            $items.eq(idxActive).addClass("active")[0].scrollIntoView({ block: "nearest" });
        } else if (e.key === "Enter") {
            if ($active.length) $active[0].click();
        }
    });
});
