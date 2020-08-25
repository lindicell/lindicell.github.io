/*----------------------------------------------------*/
/* Mobile Navigation
------------------------------------------------------ */

$('.mobileToggle').click(function() {
    if ($('.mainNav').hasClass('openNav')) {
        $('.mainNav').removeClass('openNav');
    } else {
        $('.mainNav').addClass('openNav');
    }
});

$('.mainNav li a').click(function() {
    if ($('.mainNav').hasClass('openNav')) {
        $('.navigation').removeClass('openNav');
        $('.mainNav').removeClass('openNav');
    }
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

$(document).ready(function () {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
});

/*----------------------------------------------------*/
/* Hero Animation
------------------------------------------------------ */
var hero = new TimelineMax({});
	hero.staggerFrom(".first", 0.8, {opacity: 0}, 0.6)
		.staggerFrom(".second", 0.6, {opacity: 0, y: 20}, 0.4, "-=0.2");