// Back to Top link
var offset = 4040;
var duration = 300;
$(window).scroll(function () {
  if ($(this).scrollTop() > offset) {
    // TODO replace this with an opacity transition for smoother visual appearance
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
});

$('.back-to-top').click(function (event) {
  event.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, duration);
  return false;
});
