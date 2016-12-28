$(document).ready(function() {
    var winHasChanged = function() {
        var winHeight = $(window).height() - 75;
        $(".content").css("margin-top", winHeight);
    };


    // get rid of .load
    $(window).load("load", winHasChanged);
    $(window).on("resize", winHasChanged);
});
