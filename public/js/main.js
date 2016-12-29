$(document).ready(function() {
    var winHeight = $(window).height();
    var winHasChanged = function() {
        winHeight = $(window).height();
        $(".content").css("margin-top", winHeight);
    };

    // Show modal on image click
    $(".pop-up").on("click", function(e) {
        $(".img-preview").attr('src', $(this).find("img").attr("src"));
        $("#img-modal").modal("show");
        e.preventDefault();
    });

    // Scroll animation
    $("#down").on("click", function() {
        $("html, body").animate({
            scrollTop: winHeight
        }, 600, "swing");
    });

    // get rid of .load
    // Change top margin on page load and resize
    $(window).load("load", winHasChanged);
    $(window).on("resize", winHasChanged);
});
