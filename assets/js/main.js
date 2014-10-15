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
			$('#features-phone').css({'background-position':'0 0'});
		});
		$(".exclamation").on('click', function(){
			$('#features-phone').css({'background-position':'-390px 0'});
		});
		$(".pin").on('click', function(){
			$('#features-phone').css({'background-position':'-780px 0'});
		});
		$(".time").on('click', function(){
			$('#features-phone').css({'background-position':'-1170px 0'});
		});
		$(".storefront").on('click', function(){
			$('#features-phone').css({'background-position':'-1560px 0'});
		});
	});
});


function toggleMenu() {
   	if ( $(".site-nav-links").hasClass("activate") ) {
		$('.site-nav-links').removeClass('activate');
	}
	else {
		$('.site-nav-links').addClass('activate');
	};
}