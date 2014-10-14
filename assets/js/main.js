jQuery(function($) {
	$(document).ready( function() {
	  	//enabling stickUp on the '.navbar-wrapper' class
	  	$('#site-nav').stickUp();
	  	//toggle mobile menu from menu icon
	    $(".menu-icon").click(toggleMenu);
	    //close mobile menu from clicking a link within nav
	    $(".site-nav-links a").click(toggleMenu);
	});
});

function toggleMenu() {
    $(".site-nav-links").slideToggle();
}