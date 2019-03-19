(function($) {

    $('.dropdown-nav').on('click', function() {
        $(this).parent().find('.header-navbar__nav').slideToggle();
    })

    function wpc_add_img_bg( img_sel, parent_sel){
		if (!img_sel) {
		  console.info('no img selector');
		  return false;
		}
		var $parent, _this;
		$(img_sel).each(function(){
		  _this = $(this);
		  $parent = _this.closest( parent_sel );
		  $parent = $parent.length ? $parent : _this.parent();
		  $parent.css( 'background-image' , 'url(' + this.src + ')' );
		  _this.hide()
		});
	}

	$(window).on('load', function(){
		wpc_add_img_bg('.bg-image');
	});

})(window.jQuery);