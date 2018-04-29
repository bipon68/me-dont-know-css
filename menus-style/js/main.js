(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]




-------------------------------------------------------------------*/


$(document).ready(function() {

	

	/*==========================================================
			10. mega navigation menu init
	======================================================================*/
	if ($('.xs-menus').length > 0) {
		$('.xs-menus').xs_nav({
			mobileBreakpoint: 992,
		});
	}


	/*=============================================================
					20. wow animation init
	=========================================================================*/
	$(function(){
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true,
			scrollContainer: null,
		});
		wow.init();
	});


}); // end ready function

$(window).on('scroll', function() {

}); // END Scroll Function 

$(window).on('resize', function() {



}); // End Resize





})(jQuery);