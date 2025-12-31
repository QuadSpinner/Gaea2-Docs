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


