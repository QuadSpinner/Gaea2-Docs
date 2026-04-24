// Global TOC (perfect-height animation + optional accordion per level)
// Root-level section headings render as <h3> (not collapsible)
// Expands + sets active on the exact link that matches current URL
// NEW: if a node has `icon`, render it as <img src="/assets/svg/pages/<icon>.svg">

window.addEventListener("DOMContentLoaded", () => {
  ["#site-nav", "#site-nav-2"].forEach((hostSelector) => {
    initGlobalToc({
      hostSelector,
      toc: window.SITE_TOC,
      accordion: true, // set false to allow multiple open siblings
    });
  });
});

function initGlobalToc({
  hostSelector = "#site-nav",
  toc = window.SITE_TOC,
  accordion = true,
} = {}) {
  const host = document.querySelector(hostSelector);
  if (!host || !toc) {
    const holder = document.querySelector("#nav-holder");
    if (holder) {
      holder.classList.add("d-none");
      holder.classList.remove("d-lg-block");
    }
    return;
  }

  host.innerHTML = "";

  const roots = Array.isArray(toc) ? toc : [toc];

  // ---------- build ----------
  let topUl = null;

  for (const node of roots) {
    const isTopSection = !node.url && Array.isArray(node.children) && node.children.length;

    if (!isTopSection) {
      (topUl ??= document.createElement("ul")).appendChild(renderNode(node));
      if (!topUl.parentElement) host.appendChild(topUl);
      continue;
    }

    const h3 = document.createElement("h3");
    h3.className = "toc-section";
    addIcon(h3, node.icon);
    h3.appendChild(document.createTextNode(node.title ?? "Section"));
    host.appendChild(h3);

    const ul = document.createElement("ul");
    ul.className = "toc-section-list";
    host.appendChild(ul);

    for (const child of node.children) {
      if (child.section) {
        const div = document.createElement("li");
        div.classList.add("divider");
        ul.appendChild(div);
      }

      ul.appendChild(renderNode(child));
    }
  }

  // ---------- initial collapsed ----------
  host.querySelectorAll("li.active").forEach((li) => li.classList.remove("active"));
  host.querySelectorAll("li > ul").forEach((ul) => (ul.style.height = "0px"));

  // ---------- animation helpers ----------
  const animState = new WeakMap(); // ul -> {cancel, onEnd}

  function stopAnim(ul) {
    const st = animState.get(ul);
    if (!st) return;
    if (st.onEnd) ul.removeEventListener("transitionend", st.onEnd);
    if (st.cancel) st.cancel();
    animState.delete(ul);
  }

  function expandUl(ul) {
    stopAnim(ul);

    ul.style.height = "0px";
    ul.offsetHeight;

    const end = ul.scrollHeight;
    let cancelled = false;

    const onEnd = (e) => {
      if (cancelled || e.propertyName !== "height") return;
      ul.removeEventListener("transitionend", onEnd);
      ul.style.height = "auto";
      animState.delete(ul);
    };

    animState.set(ul, { cancel: () => (cancelled = true), onEnd });
    ul.addEventListener("transitionend", onEnd);

    requestAnimationFrame(() => {
      if (!cancelled) ul.style.height = end + "px";
    });
  }

  function collapseUl(ul) {
    stopAnim(ul);

    const start = ul.getBoundingClientRect().height;
    ul.style.height = start + "px";
    ul.offsetHeight;

    let cancelled = false;

    const onEnd = (e) => {
      if (cancelled || e.propertyName !== "height") return;
      ul.removeEventListener("transitionend", onEnd);
      ul.style.height = "0px";
      animState.delete(ul);
    };

    animState.set(ul, { cancel: () => (cancelled = true), onEnd });
    ul.addEventListener("transitionend", onEnd);

    requestAnimationFrame(() => {
      if (!cancelled) ul.style.height = "0px";
    });
  }

  function closeSubtree(li, animateTop = true) {
    const top = li.querySelector(":scope > ul");
    if (top) {
      if (animateTop) collapseUl(top);
      else top.style.height = "0px";
    }

    li.classList.remove("active");
    li.querySelectorAll("li.active").forEach((desc) => {
      desc.classList.remove("active");
      const ul = desc.querySelector(":scope > ul");
      if (ul) ul.style.height = "0px";
    });
  }

  function closeSiblings(li) {
    const parentUl = li.parentElement;
    if (!parentUl) return;

    parentUl.querySelectorAll(":scope > li.active").forEach((sib) => {
      if (sib !== li) closeSubtree(sib, true);
    });
  }

  function openGroup(li) {
    if (accordion) closeSiblings(li);

    li.classList.add("active");
    const ul = li.querySelector(":scope > ul");
    if (ul) expandUl(ul);
  }

  function toggleGroup(li) {
    if (li.classList.contains("active")) closeSubtree(li, true);
    else openGroup(li);
  }

  // ---------- events ----------
  host.addEventListener("click", (e) => {
    const a = e.target.closest("a.toc-group");
    if (!a || !host.contains(a)) return;

    e.preventDefault();
    const li = a.closest("li");
    if (li) toggleGroup(li);
  });

  // ---------- match current URL, set active, expand ancestors ----------
  markCurrentUrlActive();
  if (hostSelector === "#site-nav") {
    renderCurrentFolderSubLinks("#show-sublinks");
  }

  function renderCurrentFolderSubLinks(hostSelector = "#show-sublinks") {
    const out = document.querySelector(hostSelector);
    if (!out) return;

    const active = host.querySelector('a[href]:not(.toc-group).active');
    const activeLi = active?.closest("li") || null;
    let sourceLis = [];

    if (activeLi) {
      const childUl = activeLi.querySelector(":scope > ul");

      if (childUl) {
        sourceLis = Array.from(childUl.querySelectorAll(":scope > li"));
      } else {
        const currentUl = activeLi.closest("ul");
        if (currentUl) sourceLis = Array.from(currentUl.querySelectorAll(":scope > li"));
      }
    }

    if (!sourceLis.length) {
      const activeGroupLi = Array.from(host.querySelectorAll("li.active"))
        .reverse()
        .find(li => li.querySelector(":scope > a.toc-group"));
      const groupUl = activeGroupLi?.querySelector(":scope > ul");
      if (groupUl) sourceLis = Array.from(groupUl.querySelectorAll(":scope > li"));
    }

    sourceLis = sourceLis.filter(li =>
      !li.classList.contains("divider") &&
      !li.classList.contains("d-none")
    );

    if (!sourceLis.length) return;

    // clone ONE level of siblings from that UL, but as a fresh UL with fresh nodes
    const ul = document.createElement("ul");
    ul.className = "sub-links";

    for (const li of sourceLis) {
      const item = document.createElement("li");

      // leaf sibling
      const leafA = li.querySelector(":scope > a[href]:not(.toc-group)");
      if (leafA) {
        const a = document.createElement("a");
        a.href = leafA.getAttribute("href") || leafA.href;
        a.textContent = (leafA.textContent || "").trim();
        if (leafA.classList.contains("active")) a.classList.add("active");
        item.appendChild(a);
        ul.appendChild(item);
        continue;
      }

      // folder/group sibling: use its group label, and link to FIRST leaf inside it (same behavior as your sections)
      const groupA = li.querySelector(":scope > a.toc-group");
      if (groupA) {
        const title = (groupA.textContent || "").trim() || "Untitled";
        const firstLeaf = li.querySelector('a[href]:not(.toc-group)');
        const href = firstLeaf ? (firstLeaf.getAttribute("href") || firstLeaf.href) : "#";

        const a = document.createElement("a");
        a.href = href;
        a.textContent = title;
        item.appendChild(a);

        ul.appendChild(item);
        continue;
      }
    }

    out.innerHTML = "";
    out.appendChild(ul);
  }

  // ---------- NEW: breadcrumbs ----------
  // expects a container like: <ol id="breadcrumbs" class="breadcrumb" aria-label="breadcrumbs"></ol>
  buildBreadcrumbs("#breadcrumbs", "Home", "/");

  function markCurrentUrlActive() {
    const current = normalizeUrl(location.href);

    const links = Array.from(host.querySelectorAll('a[href]:not(.toc-group)'));
    const hit = links.find((a) => normalizeUrl(a.href) === current);
    if (!hit) return;

    host.querySelectorAll("li.active").forEach((li) => li.classList.remove("active"));
    host.querySelectorAll("a.active").forEach((a) => a.classList.remove("active"));
    host.querySelectorAll("li > ul").forEach((ul) => (ul.style.height = "0px"));

    hit.classList.add("active");

    let li = hit.closest("li");
    while (li) {
      const parentLi = li.parentElement?.closest("li");
      if (!parentLi) break;

      openGroup(parentLi);

      const ul = parentLi.querySelector(":scope > ul");
      if (ul) ul.style.height = "auto";

      li = parentLi;
    }
  }

  function normalizeUrl(u) {
    const url = new URL(u, location.origin);
    url.hash = "";
    url.search = "";
    let p = url.pathname;
    p = p.replace(/\/index\.html$/i, "/");
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    url.pathname = p;
    return url.toString();
  }

  // ---------- icon helper ----------
  function addIcon(el, icon) {
    if (!icon) return;

    const i = document.createElement("i");
    const cls = String(icon).trim();

    if (cls.includes("fa-")) {
      i.className = cls;
    } else {
      i.className = `fa-duotone fa-solid fa-${cls}`;
    }
    i.classList.add("toc-icon");
    el.appendChild(i);
  }

  // ---------- node renderer ----------
  function renderNode(node) {

    const li = document.createElement("li");
    const kids = Array.isArray(node.children) && node.children.length > 0;

    if (kids) {
      const a = document.createElement("a");
      a.href = "#";
      a.classList.add("toc-group");
      addIcon(a, node.icon);
      a.appendChild(document.createTextNode(node.title ?? "Untitled"));
      li.appendChild(a);

      const ul = document.createElement("ul");
      li.appendChild(ul);
      for (const c of node.children) {
        if (c.section) {
          const div = document.createElement("li");
          div.classList.add("divider");
          ul.appendChild(div);
        }
        ul.appendChild(renderNode(c));
      }
    } else {
      const a = document.createElement("a");
      a.href = node.url ?? "#";
      addIcon(a, node.icon);
      a.appendChild(document.createTextNode(node.title ?? node.url ?? "Untitled"));
      li.appendChild(a);
    }

    if (node.hidden) {
      li.classList.add("d-none");
    }

    return li;
  }

  // ---------- breadcrumbs ----------
  function buildBreadcrumbs(olSelector, homeTitle = "Home", homeUrl = "/") {
    const ol = document.querySelector(olSelector);
    if (!ol) return;

    const active = host.querySelector('a[href]:not(.toc-group).active');
    if (!active) return;

    const chain = [];

    // 1) leaf
    chain.push({
      title: (active.textContent || "").trim() || "Untitled",
      url: active.getAttribute("href") || active.href
    });

    // 2) parent groups (li > a.toc-group)  ---- FIX: give them a real URL
    let li = active.closest("li");
    while (li) {
      const parentLi = li.parentElement?.closest("li");
      if (!parentLi) break;

      const groupA = parentLi.querySelector(":scope > a.toc-group");
      if (groupA) {
        const groupTitle = (groupA.textContent || "").trim() || "Untitled";

        const firstLeaf = parentLi.querySelector(":scope > ul")?.querySelector('a[href]:not(.toc-group)');
        const groupUrl = firstLeaf ? (firstLeaf.getAttribute("href") || firstLeaf.href) : null;

        chain.push({
          title: groupTitle,
          url: groupUrl || null
        });
      }

      li = parentLi;
    }

    // 3) top section crumb (already uses first leaf under the section)
    const sec = findTopSectionCrumb(active);
    if (sec) chain.push(sec);

    chain.reverse();

    // render
    ol.innerHTML = "";
    ol.classList.add("breadcrumb");
    ol.setAttribute("aria-label", "breadcrumbs");

    ol.appendChild(makeCrumb(homeTitle, homeUrl, false));
    ol.appendChild(makeCrumb(document.body.dataset.hive, document.body.dataset.hiveLink, false));

    for (let i = 0; i < chain.length - 1; i++) {
      const isLast = i === chain.length - 2;
      const c = chain[i];

      // if still no url, fall back to "#"
      ol.appendChild(makeCrumb(c.title, c.url || "#", isLast));
    }
  }


  function makeCrumb(title, url, isActive) {
    const li = document.createElement("li");
    li.className = "breadcrumb-item" + (isActive ? " active" : "");
    if (isActive) li.setAttribute("aria-current", "page");

    const a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    li.appendChild(a);
    return li;
  }

  // replace findTopSectionTitle() with this
  function findTopSectionCrumb(activeAnchor) {
    const sectionUl = activeAnchor.closest("ul.toc-section-list");
    if (!sectionUl) return null;

    // h3 just before this section list
    let h3 = sectionUl.previousElementSibling;
    while (h3 && !(h3.tagName === "H3" && h3.classList.contains("toc-section"))) {
      h3 = h3.previousElementSibling;
    }

    const title = h3 ? (h3.textContent || "").trim() : null;
    if (!title) return null;

    // section link = first leaf link under this section title
    const firstLeaf = sectionUl.querySelector('a[href]:not(.toc-group)');
    const url = firstLeaf ? (firstLeaf.getAttribute("href") || firstLeaf.href) : null;

    return { title, url: url || "#" };
  }

}

// Simple on-page TOC (single #content)
// - No collapse, no scrollspy, no animation
// - Includes h1..h4 and nests them by heading level
window.addEventListener("DOMContentLoaded", () => {

  if (document.body?.dataset?.hiveShortname === "Home") {
    document.querySelector("#page-naver")?.remove();
    return;
  }

  const content = document.querySelector("#contents");
  if (!content) return;

  const nav = document.querySelector("#page-nav");

  if (!nav) return;

  const headings = Array.from(content.querySelectorAll("h1, h2, h3"))
    .filter(h => (h.textContent || "").trim().length > 0);

  if (!headings.length) return;

  const slugify = (s) => s.toLowerCase().trim().replace(/[\s\W-]+/g, "-").replace(/^-+|-+$/g, "").replace(/-+/g, "-");

  function ensureId(el) {
    if (el.id) return el.id;
    let base = slugify(el.textContent.trim()) || "section";
    let id = base, i = 2;
    while (document.getElementById(id)) id = `${base}-${i++}`;
    el.id = id;
    return id;
  }

  nav.innerHTML = "";

  const rootUl = document.createElement("ul");
  nav.appendChild(rootUl);

  // stack of { level, ul }
  const stack = [{ level: 0, ul: rootUl }];

  for (const h of headings) {
    const level = parseInt(h.tagName.substring(1), 10); // 1..4
    const text = h.textContent.trim();
    const id = ensureId(h);

    while (stack.length && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    const parentUl = stack[stack.length - 1].ul;

    const li = document.createElement("li");
    li.className = `h${level}`;

    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = text;

    li.appendChild(a);
    parentUl.appendChild(li);

    const childUl = document.createElement("ul");
    li.appendChild(childUl);
    stack.push({ level, ul: childUl });
  }

  // remove empty uls
  nav.querySelectorAll("li > ul").forEach(ul => {
    if (!ul.children.length) ul.remove();
  });
});

