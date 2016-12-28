$(document).ready(function() {
    var winHasChanged = function() {
        var winHeight = $(window).height();
        $(".content").css("margin-top", winHeight);
    };

    // get rid of .load
    // Call winHasChanged on load and on resize
    $(window).load("load", winHasChanged);
    $(window).on("resize", winHasChanged);
});
