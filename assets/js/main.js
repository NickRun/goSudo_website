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