// Time-based Greeting
var date = new Date();
var hours = date.getHours();
var greeting = document.getElementById("greeting");

if (hours < 18) {

  // root.classList.add("light");
  greeting.innerHTML = "Good afternoon";
} else if (hours < 12) {
  // document.getElementById("root");
  // root.classList.add("light");
  greeting.innerHTML = "Good morning";
} else {
  // document.getElementById("root");
  // root.classList.add("dark");
  greeting.innerHTML = "Good evening";
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