$(document).ready(function() {
    var winHeight = $(window).height();
    var winHasChanged = function() {
        winHeight = $(window).height();
        $(".content").css("margin-top", winHeight);
    };
    $(window).ready(winHasChanged);

    var mobileWidth = 768;
    var winWidth = $(window).width();

    // Change top margin on page resize
    $(window).on("resize", winHasChanged);

    // Contact button animation
    $("#contact").one("click", function(e) {
        $(".info-box").css("opacity", "0.8");
        winWidth = $(window).width();
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
                    delay: 500
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
        // Use full image instead of scaled
        var imgSrc = $(this).find("img").attr("src");
        var srcLength = imgSrc.length;
        var fullImg = imgSrc.substring(0, srcLength - 4) + "-full.jpg";

        $(".img-preview").attr("src", fullImg);
        $("#img-modal").modal("show");
        e.preventDefault();
    });

    // Reveal on scroll animation
    window.sr = ScrollReveal({distance: "2.5px", scale: 0.95, viewFactor: 0.4, easing: "ease-in-out"});
    sr.reveal(".left", {origin: "left"});
    sr.reveal(".right", {origin: "right"});
    sr.reveal(".full", {origin: "bottom"});

});
