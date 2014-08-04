var yourTeam=[];
yourTeam[0]={pic:"img/kit-cloudkicker.jpg", firstname:"Kit", lastname:"Cloudkicker", title:"Navigator, Sea Duck", email:"kit@adamruf.com"};
yourTeam[1]={pic:"img/adam-ruf.jpg", firstname:"Adam", lastname:"Ruf", title:"Senior User Experience Designer", email:"adam@adamruf.com"};
yourTeam[2]={pic:"img/luke-skywalker.jpg", firstname:"Luke", lastname:"Skywalker", title:"Jedi", email:"luke@adamruf.com"};
yourTeam[3]={pic:"img/sherlock-holmes.jpg", firstname:"Sherlock", lastname:"Holmes", title:"Detective", email:"sherlock@adamruf.com"};
yourTeam[4]={pic:"img/alan-grant.jpg", firstname:"Alan", lastname:"Grant", title:"Paleontologist", email:"dennis@adamruf.com"};
yourTeam[5]={pic:"img/ellen-ripley.jpg", firstname:"Ellen", lastname:"Ripley", title:"Warrant Officer", email:"ellen@adamruf.com"};
yourTeam[6]={pic:"img/ender-wiggin.jpg", firstname:"Ender", lastname:"Wiggin", title:"Speaker for the Dead", email:"ender@adamruf.com"};
yourTeam[7]={pic:"img/daenerys-targaryen.jpg", firstname:"Daenerys", lastname:"Targaryen", title:"Mother of Dragons", email:"danaerys@adamruf.com"};
yourTeam[8]={pic:"img/jean-luc-picard.jpg", firstname:"Jean-Luc", lastname:"Picard", title:"Captain, USS Enterprise", email:"jean-luc@adamruf.com"};
yourTeam[9]={pic:"img/mattie-ross.jpg", firstname:"Mattie", lastname:"Ross", title:"Pa's Avenger", email:"mattie@adamruf.com"};
yourTeam[10]={pic:"img/dagny-taggart.jpg", firstname:"Dagny", lastname:"Taggart", title:"VP of Operations", email:"dagny@adamruf.com"};


var funWords=["Really", "Totally", "Certainly", "Clearly", "Specifically", "Surely", "Seriously", "Indubitably", "Definitely", "Undoubtedly", "Absolutely", "Positively"];

function randomLunchInvite() {
var randFun = funWords[Math.floor(Math.random() * funWords.length)];
document.getElementById("fun").innerHTML = randFun;
var randArray = yourTeam[Math.floor(Math.random() * yourTeam.length)];
document.getElementById("picture").src = randArray.pic;
document.getElementById("picture").alt = randArray.firstname + " " + randArray.lastname;
document.getElementById("name").innerHTML = "<i class=\"fa fa-user\"></i> " + randArray.firstname + " " + randArray.lastname;
document.getElementById("role").innerHTML = "<i class=\"fa fa-briefcase\"></i> " + randArray.title;
document.getElementById("email").innerHTML = "<i class=\"fa fa-envelope\"></i> " + randArray.email;

document.getElementById('template').innerHTML = "<p>Hi " + randArray.firstname + ",</p> <p>How are you doing?</p> <p>I'd like to grab lunch with you this week.</p> <p><strong>Does Thursday or Friday from 12pm - 1pm work for you?</strong></p> <p>Thanks!</p>"

inviteBody = "Hi " + randArray.firstname + ",\r\n\r\n" + "How are you doing? I'd like to grab lunch with you this week.\r\n\r\n" + "Does Thursday or Friday from 12pm-1pm work for you?\r\n\r\n" + "Thanks!"
inviteBody = encodeURIComponent(inviteBody);
document.getElementById('draft-invite-email').innerHTML = "<a id=\"view-draft\" class=\"btn btn-md btn-info\" href=\"mailto:" + randArray.email + "?subject=INVITE:+Lunch+this+week&body=" + inviteBody + "\"><i class=\"fa fa-envelope\"></i> View Email Draft</a> <p class=\"disclaimer\"><i class=\"fa fa-lightbulb-o\"></i> If this doesn\'t launch a draft in Gmail, you need to <a href=\"https://productforums.google.com/forum/#!msg/chrome/sPhxiTQlf4s/JX9hq4JLgVYJ\">set Gmail as your default email link handler</a>.</p>";
}

$('#inviterator').click(function() {
	randomLunchInvite();
	// Tracking inviterator clicks
	mixpanel.track("Generated invite");
});

$('#view-draft').click(function() {
	// Tracking email draft views
    mixpanel.track("Viewed email draft");
});

$('#easter-egg').click(function(){
	$('#capybara-surprise').toggleClass('surprised');
});
