window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  $('.navbar-burger').click(function() {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  $('.navbar-item[href^="#"]').click(function() {
    $('.navbar-burger').removeClass('is-active');
    $('.navbar-menu').removeClass('is-active');
  });
});
