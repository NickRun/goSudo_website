jQuery(function($) {
	$(document).ready( function() {
	  	//enabling stickUp on the '.navbar-wrapper' class
	  	$('#site-nav').stickUp();
	  	//toggle mobile menu from menu icon
	    $(".menu-icon").click(toggleMenu);
	    //close mobile menu from clicking a link within nav
	    $(".site-nav-links a").click(toggleMenu);
	    //on window resize load the correct transparent gif
	    // $(window).resize(imageresize);
	});
});

function toggleMenu() {
    $(".site-nav-links").slideToggle();
}

// function imageresize() {
// 	if($(window).innerWidth() > 768) {
//     	$('#intro-bg-image').attr("src", 'assets/img/backgrounds/intro-md-transparent.gif');
//     	$('#features-bg-image').attr("src", 'assets/img/backgrounds/features-md-transparent.gif');
//     	// $('#phone-bg-image').attr("src", 'assets/img/backgrounds/phone-sm-transparent.gif');
//   	}
//   	else {
//   		$('#intro-bg-image').attr("src", 'assets/img/backgrounds/intro-sm-transparent.gif');
//   		// $('#features-bg-image').attr("src", 'assets/img/backgrounds/features-sm-transparent.gif');

//   	}
// }

function preloader() {
	if (document.images) {
		//load intro transparent images
		introMdTransparent = new Image();
        introSmTransparent = new Image();

        introMdTransparent.src = "assets/img/backgrounds/intro-md-transparent.gif";
        introSmTransparent.src = "assets/img/backgrounds/intro-sm-transparent.gif";

        //load features transparent images
        featuresMdTransparent = new Image();
        featuresSmTransparent = new Image();

        featuresMdTransparent.src = "assets/img/backgrounds/features-md-transparent.gif";
        featuresSmTransparent.src = "assets/img/backgrounds/features-sm-transparent.gif";

	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

(function(){
	// imageresize();
	addLoadEvent(preloader);
})();