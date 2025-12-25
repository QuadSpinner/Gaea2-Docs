$(document).ready(
    (() => {
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

        let docs = [];
        let byRef = new Map();
        let idx = null;
        let loading = null;

        function show() { $popup.addClass("show").show(); }
        function hide() { $popup.removeClass("show").hide(); }
        function clear() { $results.empty(); $empty.hide(); }

        function esc(s) {
            return (s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
        }

        function normalizeHref(u) {
            if (!u) return "#";
            if (/^https?:\/\//i.test(u) || u.startsWith("/") || u.startsWith("#")) return u;
            // if your site needs .html, change to: return "/" + u + ".html";
            return "/" + u.replace(/^\.\//, "");
        }

        function highlight(s, q) {
            if (!q) return esc(s);
            const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
            return esc(s).replace(re, "<mark class=\"p-0\">$1</mark>");
        }

        function snippet(text, q, maxLen = 160) {
            const t = (text || "").replace(/\s+/g, " ").trim();
            if (!t) return "";
            const qq = (q || "").toLowerCase();
            const i = qq ? t.toLowerCase().indexOf(qq) : -1;
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

        function buildLunrQuery(input) {
            // "foo bar" -> "foo* bar*"
            const terms = input.trim().split(/\s+/).filter(Boolean).map(escapeLunrTerm);
            return terms.map(t => `${t}*`).join(" ");
        }

        async function ensureLoaded() {
            if (idx) return;
            if (loading) return loading;

            loading = (async () => {
                $meta.text("Loading search…");
                show();

                docs = await $.getJSON(INDEX_URL); // your JSON array
                byRef = new Map(docs.map(d => [String(d.url), d]));

                idx = lunr(function () {
                    this.ref("url");
                    this.field("title", { boost: 10 });
                    this.field("hive", { boost: 3 });
                    this.field("text");

                    for (const d of docs) {
                        this.add({
                            url: String(d.url),
                            title: d.title || "",
                            hive: d.hive || "",
                            text: d.text || ""
                        });
                    }
                });

                $meta.text("Type to search");
            })().finally(() => { loading = null; });

            return loading;
        }

        function render(query, matches) {
            clear();

            if (!matches.length) {
                $empty.show();
                $meta.text(`No results for “${query}”`);
                return;
            }

            const shown = matches.slice(0, MAX_RESULTS);
            $meta.text(`${shown.length} result${shown.length === 1 ? "" : "s"} for “${query}”`);

            for (const m of shown) {
                const d = byRef.get(String(m.ref));
                if (!d) continue;

                const href = normalizeHref(d.url);
                const title = d.title || d.url;
                const hive = d.hive || "";

                const $a = $(`
        <a class="list-group-item list-group-item-action" href="${esc(href)}" role="option">
          <div class="d-flex justify-content-between gap-3">
            <div class="fw-semibold">${highlight(title, query)}</div>
            ${hive ? `<div class="small text-secondary text-nowrap">${esc(hive)}</div>` : ""}
          </div>
          <div class="small text-secondary">${highlight(snippet(d.text || "", query), query)}</div>
        </a>
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

            let matches = [];
            try {
                matches = idx.search(buildLunrQuery(query));
            } catch {
                // fallback: try raw query (may still fail on reserved chars)
                try { matches = idx.search(query); } catch { matches = []; }
            }

            render(query, matches);
        }

        function debounce(fn, ms) {
            let t = 0;
            return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
        }

        const onInput = debounce(async () => {
            await ensureLoaded();
            show();
            search($box.val());
        }, DEBOUNCE_MS);

        $box.on("focus", async () => {
            await ensureLoaded();
            show();
            search($box.val());
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
                $items.removeClass("active");
                $items.eq(idxActive).addClass("active")[0].scrollIntoView({ block: "nearest" });
            } else if (e.key === "Enter") {
                if ($active.length) $active[0].click();
            }
        });
    }));

