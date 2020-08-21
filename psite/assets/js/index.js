$(function() {
    $('#WAButton').floatingWhatsApp({
      phone: '1231231231', //WhatsApp Business phone number International format-
      //Get it with Toky at https://toky.co/en/features/whatsapp.
      headerTitle: 'Chat with us on WhatsApp!', //Popup Title
      popupMessage: 'Hello, how can we help you?', //Popup Message
      showPopup: true, //Enables popup display
      buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
      //headerColor: 'crimson', //Custom header color
      //backgroundColor: 'crimson', //Custom background button color
      position: "right"    
    });
  });

var fadeStop = 300;
$(document).ready(function(){
  $('.navbar').css('background-color', 'rgba(0, 0, 0, 0)');

  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#menu a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$(document).scroll(function(){

  var vScroll = $(this).scrollTop();
  var opacity= 1-vScroll/fadeStop;
  var visibility = vScroll/fadeStop;

  $('.comp').css({
    'opacity':''+opacity+'',
    'transform':'translate('+-vScroll*2+'px, '+-vScroll/6+'px) scale('+opacity+')'
  });

  $('.navbar-brand').css('opacity', visibility);
  $('.navbar').css('background-color', 'rgba(0, 0, 0, '+visibility/4+')');

  if(vScroll > $('.box').offset().top-($(window).height()/1.2)){
    $('.box').each(function(i){
      setTimeout(function(){
        $('.box').eq(i).addClass('trans');
      },150*(i+1));
    });
  }

  if(vScroll > $('.tab').offset().top-($(window).height()/1.2)){
    $('.tab').each(function(i){
      setTimeout(function(){
        $('.tab').eq(i).addClass('flow');
      },150*(i+1));
    });
  }

  if(vScroll > $('.card').offset().top-($(window).height()/1.2)){
    $('.card').each(function(i){
      setTimeout(function(){
        $('.card').eq(i).addClass('trans');
      },150*(i+1));
    });
  }

});