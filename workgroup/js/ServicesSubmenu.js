$(document).ready(function(){
	var sybtouch 	= $('#service-sub-touch-menu');
	var submenu 	= $('.ServicesSubMenu');

	$(sybtouch).on('click', function(e) {
		e.preventDefault();
		submenu.slideToggle();
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && submenu.is(':hidden')) {
			submenu.removeAttr('style');
		}
	});

});