// Time-based Greeting
var date=new Date,hours=date.getHours(),greeting=document.getElementById("greeting");
// root.classList.add("light");
greeting.innerHTML=hours<18?"Good afternoon":hours<12?"Good morning":"Good evening";
// Back to Top link
var offset=4040,duration=300;$(window).scroll(function(){$(this).scrollTop()>offset?
// TODO replace this with an opacity transition for smoother visual appearance
$(".back-to-top").fadeIn():$(".back-to-top").fadeOut()}),$(".back-to-top").click(function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});