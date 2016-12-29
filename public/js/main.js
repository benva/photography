$(document).ready(function() {
    var winHeight = $(window).height();
    var tabSize = 66;
    var winHasChanged = function() {
        $(".content").css("margin-top", winHeight - tabSize);
    };
    // get rid of .load
    // Change top margin on page load and resize
    $(window).load("load", winHasChanged);
    $(window).on("resize", winHasChanged);

    // Show modal on image click
    $('.pop-up').on('click', function(e) {
        $('.img-preview').attr('src', $(this).find('img').attr('src'));
        $('#img-modal').modal('show');
        e.preventDefault();
    });

    // Scroll animation
    $("#photos").click(function(e) {
        $("html, body").animate({
            scrollTop: winHeight
        }, 600, 'swing');
        e.preventDefault();
    });

    $("#contact").click(function(e) {
        $("html, body").animate({
            scrollTop: 0
        }, 750, 'swing');
        e.preventDefault();
    });
});
