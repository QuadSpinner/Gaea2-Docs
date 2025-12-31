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


