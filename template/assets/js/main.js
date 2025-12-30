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



(() => {
    const STORAGE_KEY = "bs-theme"; // "light" | "dark" | "system"
    const root = document.documentElement;

    const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

    function getStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
    }
    function setStored(v) {
        try { localStorage.setItem(STORAGE_KEY, v); } catch { }
    }

    function systemTheme() {
        return (mq && mq.matches) ? "dark" : "light";
    }

    function resolveTheme(mode) {
        return mode === "system" ? systemTheme() : mode;
    }

    function applyMode(mode) {
        const theme = resolveTheme(mode);
        root.setAttribute("data-bs-theme", theme);
        root.setAttribute("data-bs-theme-mode", mode); // optional, for debugging/state
        setStored(mode);
        updateToggles(mode);

        // refresh bootstrap tooltips title/aria if you want dynamic strings
        // (optional) updateTitles(mode);
    }

    function initMode() {
        const stored = getStored();
        if (stored === "light" || stored === "dark" || stored === "system") return stored;
        return "system";
    }

    function updateToggles(mode) {
        // Your markup uses Tabler's classes: show/hide based on current theme.
        // Ensure correct classes are present on <html> for Tabler helpers.
        root.classList.toggle("theme-dark", resolveTheme(mode) === "dark");
        root.classList.toggle("theme-light", resolveTheme(mode) === "light");

        // If you also want to reflect "system" in UI, you can add a class:
        root.classList.toggle("theme-system", mode === "system");
    }

    // Bind clicks for links with the existing aria-labels / titles:
    // - moon: "Enable dark mode"
    // - sun:  "Enable light mode"
    // - system: "Use System Mode"
    function bindClicks() {
        const dark = document.querySelector('[aria-label="Enable dark mode"]');
        const light = document.querySelector('[aria-label="Enable light mode"]');
        const system = document.querySelector('[aria-label="Use System Mode"]');

        if (dark) dark.addEventListener("click", (e) => { e.preventDefault(); applyMode("dark"); });
        if (light) light.addEventListener("click", (e) => { e.preventDefault(); applyMode("light"); });
        if (system) system.addEventListener("click", (e) => { e.preventDefault(); applyMode("system"); });
    }

    // If in "system" mode, react to OS changes live.
    function bindSystemListener() {
        if (!mq) return;
        const handler = () => {
            const mode = getStored() || "system";
            if (mode === "system") {
                // just re-apply to pick up new system preference
                root.setAttribute("data-bs-theme", systemTheme());
                updateToggles("system");
            }
        };
        if (mq.addEventListener) mq.addEventListener("change", handler);
        else if (mq.addListener) mq.addListener(handler);
    }

    // init
    const mode = initMode();
    applyMode(mode);
    bindClicks();
    bindSystemListener();

    // optional global API
    window.setThemeMode = applyMode; // setThemeMode("light"|"dark"|"system")
})();


(() => {
    const KEY = "layout.container"; // "xl" | "fluid"
    const container = document.getElementById("expanding-container");
    const contentcontainer = document.getElementById("content-holder");
    const button = document.getElementById("cmd-expand");
    if (!container || !button) return;

    function getStored() {
        try { return localStorage.getItem(KEY); } catch { return null; }
    }
    function setStored(v) {
        try { localStorage.setItem(KEY, v); } catch { }
    }

    function apply(mode) {
        const isFluid = mode === "fluid";
        container.classList.toggle("container-fluid", isFluid);
        container.classList.toggle("container-xxl", !isFluid);

        contentcontainer.classList.toggle("col-lg-6", isFluid);
        setStored(mode);
    }

    // init: default to existing state or stored value
    const stored = getStored();
    if (stored === "xl" || stored === "fluid") {
        apply(stored);
    } else {
        // infer from DOM once, then store
        apply(container.classList.contains("container-fluid") ? "fluid" : "xl");
    }

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const next = container.classList.contains("container-fluid") ? "xl" : "fluid";
        apply(next);
    });

    // optional API
    window.setContainerMode = apply; // setContainerMode("xl"|"fluid")
})();


$(document).ready(function () {

    $(".image-row > p").each(function () {
        $(this).replaceWith($(this).contents());
    });
    $(".image-row-vertical > p").each(function () {
        $(this).replaceWith($(this).contents());
    });
    // unwrap <figure> if it's directly wrapped by a <p>
    $("#contents img").each(function () {
        if ($(this).attr("alt") != null) {
            $(this).wrap("<figure></figure>");
            $(this).after("<figcaption>" + $(this).attr("alt") + "</figcaption>");
        }
    });


});


