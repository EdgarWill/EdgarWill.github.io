( function() {

	function afterReveal (el) {
		el.addEventListener('animationend', function () {
			jQuery('.wow').addClass('animation-fired');
		});
	}



	jQuery(document).ready( function() {

		new WOW({ callback: afterReveal }).init();

		jQuery('#fullpage').fullpage({
			navigation: true,
			autoScrolling:false
		})
			
	});
	
	jQuery(window).on('load', function(){


	})


})();