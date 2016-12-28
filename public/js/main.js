$(document).ready(function() {
    var winHasChanged = function() {
        var winHeight = $(window).height() - 56;
        $(".content").css("margin-top", winHeight);
    };

    $('.pop-up').on('click', function(e) {
        $('.img-preview').attr('src', $(this).find('img').attr('src'));
        $('#img-modal').modal('show');
        e.preventDefault();
    });


    // get rid of .load
    $(window).load("load", winHasChanged);
    $(window).on("resize", winHasChanged);
});
