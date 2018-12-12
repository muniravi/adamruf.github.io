// Time-based Greeting
var date = new Date();
var hour = date.getHours();
// var root = document.getElementById("root");
var greet = document.getElementById("greeting");

if (hour >= 0 && hour < 12) {
  // root.classList.add("light");
  greet.innerHTML = "Good morning";
}
else if (hour >= 12 && hour < 18) {
  // root.classList.add("light");
  greet.innerHTML = "Good afternoon";
}
else {
  // root.classList.add("dark");
  greet.innerHTML = "Good evening";
}

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