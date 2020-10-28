$(document).ready(function(){
	var sybtouchservice 	= $('#service-sub-touch-menu');
	var submenuservice 	= $('.ServicesSubMenu');

	$(sybtouchservice).on('click', function(e) {
		e.preventDefault();
		submenuservice.slideToggle();
	});

	$(window).resize(function(){
		var x = $(window).width();
		if(x > 767 && submenu.is(':hidden')) {
			submenuservice.removeAttr('style');
		}
	});

});