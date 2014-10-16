jQuery(function($) {
	$(document).ready( function() {
	  	//enabling stickUp on the '.navbar-wrapper' class
	  	$('#site-nav').stickUp();
	  	//toggle mobile menu from menu icon
	    $(".menu-icon").on('click', function(){
		    toggleMenu();
		});
	    //close mobile menu from clicking a link within nav
	    $(".site-nav-links a").on('click', function(){
		    toggleMenu();
		});
		//switch features phone
		$(".cash-phone").on('click', function(){
			$('#features-phone').css({'background-image':'url(assets/img/feature-phones/earn-cash-lg.png)'});
		});
		$(".exclamation").on('click', function(){
			$('#features-phone').css({'background-image':'url(assets/img/feature-phones/exclamation-lg.png)'});
		});
		$(".pin").on('click', function(){
			$('#features-phone').css({'background-image':'url(assets/img/feature-phones/pin-lg.png)'});
		});
		$(".time").on('click', function(){
			$('#features-phone').css({'background-image':'url(assets/img/feature-phones/storefront-lg.png)'});
		});
		$(".storefront").on('click', function(){
			$('#features-phone').css({'background-image':'url(assets/img/feature-phones/time-lg.png)'});
		});
		//assign random class
		var dc = ['deals1','deals2', 'deals3']; //add as many classes as u want
		var random = Math.floor(Math.random()*dc.length);
		$('.pre-deals').addClass(dc[random]);
	});
});

function preload(phoneImages) {
    $(phoneImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    '../img/feature-phones/earn-cash-lg.png',
    '../img/feature-phones/exclamation-lg.png',
    '../img/feature-phones/pin-lg.png',
    '../img/feature-phones/storefront-lg.png',
    '../img/feature-phones/time-lg.png'
]);


function toggleMenu() {
   	if ( $(".site-nav-links").hasClass("activate") ) {
		$('.site-nav-links').removeClass('activate');
	}
	else {
		$('.site-nav-links').addClass('activate');
	};
}