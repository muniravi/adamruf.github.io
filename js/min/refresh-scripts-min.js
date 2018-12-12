// Time-based Greeting
var date=new Date,hour=date.getHours(),greet=document.getElementById("greeting");
// root.classList.add("light");
greet.innerHTML=0<=hour&&hour<12?"Good morning":12<=hour&&hour<18?"Good afternoon":"Good evening";
// Back to Top link
var offset=4040,duration=300;$(window).scroll(function(){$(this).scrollTop()>offset?
// TODO replace this with an opacity transition for smoother visual appearance
$(".back-to-top").fadeIn():$(".back-to-top").fadeOut()}),$(".back-to-top").click(function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});