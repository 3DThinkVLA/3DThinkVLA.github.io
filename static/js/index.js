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

  $('.rollout-row').each(function() {
    var $row = $(this);
    var $scrollbar = $('<div class="rollout-scrollbar"><div class="rollout-scrollbar-inner"></div></div>');
    $row.after($scrollbar);

    function syncWidth() {
      $scrollbar.find('.rollout-scrollbar-inner').width($row.get(0).scrollWidth);
    }

    var isSyncingRow = false;
    var isSyncingBar = false;

    $row.on('scroll', function() {
      if (isSyncingBar) {
        isSyncingBar = false;
        return;
      }
      isSyncingRow = true;
      $scrollbar.scrollLeft($row.scrollLeft());
    });

    $scrollbar.on('scroll', function() {
      if (isSyncingRow) {
        isSyncingRow = false;
        return;
      }
      isSyncingBar = true;
      $row.scrollLeft($scrollbar.scrollLeft());
    });

    syncWidth();
    $(window).on('resize', syncWidth);
  });
});
