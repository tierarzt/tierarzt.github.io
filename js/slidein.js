$('.card').bind('inview', function(event, visible) {
  if (visible) {
    $(this).addClass('slide-in');
  } else {
    $(this).removeClass('slide-in');
  }
});