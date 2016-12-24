$(document).ready(function() {
    var winHasChanged = function() {
        var winHeight = $(window).height();
        $(".content").css("margin-top", winHeight);
    };

    $(window).load("load", winHasChanged);
    $(window).on("resize", winHasChanged);
});