$(document).ready(function() {
    var mobileWidth = 768;
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var winHasChanged = function() {
        winHeight = $(window).height();
        $(".content").css("margin-top", winHeight);
    };

    // Contact button animation
    $("#contact").one("click", function(e) {
        $(".info-box").css("opacity", "0.8");
        if (winWidth > 768) {
            $("#info").typewrite({
                actions: [{
                    speed: 5
                }, {
                    delay: 1500
                }, {
                    type: "me@bemva.ca"
                }, {
                    delay: 1000
                }, {
                    select: {
                        from: 5,
                        to: 11
                    }
                }, {
                    remove: {
                        num: 6,
                        type: "whole"
                    }
                }, {
                    delay: 500
                }, {
                    type: "nvs."
                }, {
                    delay: 500
                }, {
                    remove: {
                        num: 2,
                        type: "stepped"
                    }
                }, {
                    delay: 500
                }, {
                    type: "a.ca"
                }]
            });
        } else {
            $("#info").html("me@benva.ca");
        }
        e.preventDefault();
    });

    // Scroll animation
    $("#down").on("click", function() {
        $("html, body").animate({
            scrollTop: winHeight
        }, 600, "swing");
    });

    // Show modal on image click
    $(".pop-up").on("click", function(e) {
        $(".img-preview").attr('src', $(this).find("img").attr("src"));
        $("#img-modal").modal("show");
        e.preventDefault();
    });

    // get rid of .load
    // Change top margin on page load and resize
    $(window).load("load", winHasChanged);
    $(window).on("resize", winHasChanged);
});
