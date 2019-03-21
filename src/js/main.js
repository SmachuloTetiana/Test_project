(function($) {

    $('.dropdown-nav').on('click', function() {
        $(this).parent().find('.header-navbar__nav').slideToggle();
    })


    $(window).on('resize', function() {
        const width = $(window).width();
        const displayState = width > 768 ? 'flex' : 'none';

        $('.header-navbar__nav').css('display', displayState);
    });

})(window.jQuery);