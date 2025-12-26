
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
    });
})();