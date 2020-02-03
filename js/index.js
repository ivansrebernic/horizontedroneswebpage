$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.presentation').offset().top }, 'slow');
      return false;
    });
  });