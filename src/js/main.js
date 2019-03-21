(function($) {

    $('.dropdown-nav').on('click', function() {
        $(this).parent().find('.header-navbar__nav').slideToggle();
    })


    $(window).resize(function() {
        var width = $(window).width();
        if(width > 768) {
            $('.header-navbar__nav').css("display", "flex");
        } else {
            $('.header-navbar__nav').css("display", "none");            
        }
    })

})(window.jQuery);