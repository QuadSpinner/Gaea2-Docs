window.addEventListener("DOMContentLoaded", () => {
    const hive = document.body?.dataset?.hive;
    if (!hive) return;

    document.querySelectorAll('.nav-item[data-hive]').forEach(a => a.classList.toggle("active", a.dataset.hive === hive));
    const encoded = encodeURIComponent(window.location.href);
    const md = window.location.href.replace(".html", ".md");
    document.getElementById("cmd-view-md").setAttribute("href", md);
    document.getElementById("cmd-ask-gpt").setAttribute("href", `https://chat.openai.com/?q=Read%20${encoded}%20and%20answer%20questions%20about%20the%20content.`);
    document.getElementById("cmd-ask-claude").setAttribute("href", `https://claude.ai/new?q=Read%20${encoded}%20and%20answer%20questions%20about%20the%20content.`);
});

// Ensure the active item in .hive-nav is visible inside its horizontal scrolling container
window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".hive-nav");
  if (!nav) return;

  const active = nav.querySelector("a.active");
  if (!active) return;

  // Prefer native behavior when available
  if (typeof active.scrollIntoView === "function") {
    active.scrollIntoView({ block: "nearest", inline: "center" });
    return;
  }

  // Fallback: manual horizontal centering
  const nr = nav.getBoundingClientRect();
  const ar = active.getBoundingClientRect();
  const delta = (ar.left - nr.left) - (nr.width / 2 - ar.width / 2);
  nav.scrollLeft += delta;
});

$(document).ready(function () {

    $(".image-row > p").each(function () {
        $(this).replaceWith($(this).contents());
    });
    $(".image-row-vertical > p").each(function () {
        $(this).replaceWith($(this).contents());
    });
    // unwrap <figure> if it's directly wrapped by a <p>
    $("#contents img").each(function () {
        if ($(this).attr("alt") != null && !$(this).hasClass("card-img-top")) {
            $(this).wrap("<figure></figure>");
            $(this).after("<figcaption>" + $(this).attr("alt") + "</figcaption>");
        }
    });
});

(function () {
  function hasPre() {
    return !!document.querySelector("pre");
  }

  function loadCss(href) {
    return new Promise((resolve, reject) => {
      if ([...document.styleSheets].some(s => (s.href || "").includes(href))) return resolve();
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if ([...document.scripts].some(s => (s.src || "") === src)) return resolve();
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // keep order
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function init() {
    if (!hasPre()) return;

    try {
      await loadCss("/assets/js/highlight/styles/github-dark.min.css");
      await loadScript("/assets/js/highlight/highlight.min.js");
      await loadScript("/assets/js/highlight/languages/csharp.min.js");
      await loadScript("/assets/js/highlight/languages/json.min.js");
      await loadScript("/assets/js/highlight/languages/shell.min.js");

      setTimeout(() => {
        window.hljs?.highlightAll?.();
      }, 500);
    } catch { }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

(() => {
    window.addEventListener("DOMContentLoaded", () => {

        function normalizeUrl(u) {
            const url = new URL(u, location.origin);
            url.hash = "";
            url.search = "";
            let p = url.pathname;
            if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
            url.pathname = p;
            return url.toString();
        }

        // B) Prev/next among “siblings” under the same parent <ul>
        // - skips li.divider
        // - if sibling is a group, picks closest leaf inside it:
        //   prev => last leaf in that sibling subtree
        //   next => first leaf in that sibling subtree
        function getPrevNextSiblings(host) {
            const current = normalizeUrl(location.href);

            const hit = Array.from(host.querySelectorAll("a[href]:not(.toc-group)"))
                .find((a) => normalizeUrl(a.href) === current);

            if (!hit) return { prev: null, next: null };

            const li = hit.closest("li");
            if (!li) return { prev: null, next: null };

            return {
                prev: findSiblingLeaf(li, -1),
                next: findSiblingLeaf(li, +1),
            };

            function findSiblingLeaf(li, dir) {
                let sib = dir < 0 ? li.previousElementSibling : li.nextElementSibling;

                while (sib) {
                    if (sib.classList?.contains("divider")) {
                        sib = dir < 0 ? sib.previousElementSibling : sib.nextElementSibling;
                        continue;
                    }

                    const leaf = dir < 0 ? lastLeafIn(sib) : firstLeafIn(sib);
                    if (leaf) return leaf;

                    sib = dir < 0 ? sib.previousElementSibling : sib.nextElementSibling;
                }

                return null;
            }

            function firstLeafIn(li) {
                const direct = li.querySelector(':scope > a[href]:not(.toc-group)');
                if (direct) return direct;
                return li.querySelector('a[href]:not(.toc-group)');
            }

            function lastLeafIn(li) {
                const leaves = li.querySelectorAll('a[href]:not(.toc-group)');
                return leaves.length ? leaves[leaves.length - 1] : null;
            }
        }



        const host = document.querySelector("#site-nav");
        const box = document.querySelector("#next-nav");
        if (!host || !box) return;

        const { prev, next } = getPrevNextSiblings(host);

        box.innerHTML = "";

        const makeBtn = (type, linkEl, fallbackText) => {
            if (!linkEl) return null;

            const href = linkEl.getAttribute("href") || linkEl.href;
            const text = (linkEl.textContent || "").trim() || fallbackText;

            const a = document.createElement("a");
            a.className = `nav-btn nav-${type} btn btn-sm`;
            a.href = href;

            // text wrapped so CSS can position icon
            const span = document.createElement("span");
            span.className = "nav-btn-text";
            span.textContent = text;

            a.appendChild(span);
            return a;
        };

        const prevBtn = makeBtn("prev", prev, "Previous");
        const nextBtn = makeBtn("next", next, "Next");

        if (prevBtn) box.appendChild(prevBtn);
        if (nextBtn) box.appendChild(nextBtn);

        if (!prevBtn && !nextBtn) box.outerHTML = "";

        document.getElementById("show-sublinks").firstChild.className = 'd-flex flex-wrap';
    });
})();

(() => {
    function isTypingTarget(el) {
        if (!el) return false;
        const tag = (el.tagName || "").toUpperCase();
        return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
    }

    async function copySlug() {
        const slug = document.body?.dataset?.slug;
        if (!slug) return;

        const text = "@" + slug;

        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.setAttribute("readonly", "");
            ta.style.position = "fixed";
            ta.style.left = "-9999px";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            ta.remove();
        }
    }


    window.addEventListener("keydown", (e) => {
        if (isTypingTarget(e.target)) return;
        if (e.ctrlKey && (e.key === "F2" || e.code === "F2")) {
            e.preventDefault();
            copySlug();
        }
    }, { capture: true });
})();