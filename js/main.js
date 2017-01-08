$(document).ready(function() {
    var mobileWidth = 768;
    var largeWidth = 992;

    // Responsive elements are altered
    var winHasChanged = function() {
        $(".content").css("margin-top", $(window).height());

        if ($(window).width() <= mobileWidth) {
            $("#contact-mobile").attr("href", "mailto:me@benva.ca");

            window.sr = null;

            // Disable intro blur
            Waypoint.disableAll();
            if ($(".intro").hasClass("blur"))
                $(".intro").removeClass("blur")
        } else {
            $("#contact-mobile").attr("href", "#");

            Waypoint.enableAll();
        }

    };
    $(window).ready(winHasChanged);
    $(window).on("resize", winHasChanged);

    // Contact information typing animation for desktop only
    $("#contact").one("click", function(e) {
        if ($(window).width() > mobileWidth) {
            $(".info-box").slideDown();
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
        }
        e.preventDefault();
    });

    // Down arrow scroll animation
    $("#down").on("click", function() {
        $("html, body").animate({
            scrollTop: $(window).height()
        }, 600, "swing");
    });

    // Blur intro on scroll
    var waypoint = new Waypoint({
        element: $(".content"),
        handler: function(direction) {
            if (direction == "down")
                $(".intro").addClass("blur")
            if (direction == "up")
                $(".intro").removeClass("blur")
        },
        offset: $(window).height() - $(window).height() * .25
    });

    // Scroll reveal animtion
    window.sr = ScrollReveal({
        distance: "2.5px",
        scale: 0.95,
        mobile: false,
        viewFactor: 0.4,
        easing: "ease-in-out"
    });
    sr.reveal(".left", {
        origin: "left"
    });
    sr.reveal(".right", {
        origin: "right"
    });
    sr.reveal(".full", {
        origin: "bottom"
    });

    // Show modal on image click
    $(".pop-up").on("click", function(e) {
        var imgSrc = $(this).find("img").attr("src");
        // var imgAlt = $(this).find("img").attr("alt");

        // Use full image instead of scaled on large screens
        if ($(window).width() >= largeWidth) {
            var srcLength = imgSrc.length;
            imgSrc = imgSrc.substring(0, srcLength - 4) + "-full.jpg";
        }

        $(".img-full").attr("src", imgSrc);
        $("#img-modal").modal("show");
        e.preventDefault();
    });
});
