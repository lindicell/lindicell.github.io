/*----------------------------------------------------*/
/* Mobile Navigation
------------------------------------------------------ */
var swiper = new Swiper('.swiper-container', {
	speed: 600,
	parallax: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


  

  $(document).on('ready', function () {
    // initialization of leaflet
    $('#mapExample2').each(function () {
      var leaflet = $.HSCore.components.HSLeaflet.init($(this)[0]);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.AIzaSyCoRjby0GCtG6MGNY8kiaANy8UMfLeRbI8', {
        id: 'mapbox/light-v9'
      }).addTo(leaflet);
    });

    // initialization of form validation
    $('.js-validate').each(function () {
      var validation = $.HSCore.components.HSValidation.init($(this));
    });
  });


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