// Sticky shadowy header
$( document ).ready(function() {
	$(document).scroll(function() {
	  $('.navbar-fixed-top').toggleClass('shadowy', $(document).scrollTop() >0);
	});
});

//Fixing Sticky Header to work with keyboard controls
var stickyItem = 'top-nav';   // the ID of the fixed-position element
var readAssistOffset = 75;          // screen height - this offset value = scroll distance
var duration = 250;                 // scroll speed in ms
var doc = document.documentElement;

keydown = function (e) {
    var curElement = document.activeElement.nodeName;
    if ((e.keyCode === 32 && curElement === "BODY") || (e.keyCode === 33 || e.keyCode === 34)) {
        var viewportHeight = window.innerHeight;
        var stickyHeaderHeight = document.getElementById(stickyItem).offsetHeight;
        var newViewportHeight = viewportHeight - stickyHeaderHeight - readAssistOffset;
        e.preventDefault();
        if(e) {
            isShift = e.shiftKey || e.keyCode === 33 ? true : false;
        } else {
            isShift = window.event.shiftKey || e.keyCode === 33 ? true : false;
        };
        currScrollPosition = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        scrollToHere = newViewportHeight + currScrollPosition;
        if (isShift) {
            scrollToHere = currScrollPosition - newViewportHeight;
        }
        smoothScrollTo(scrollToHere)
    }
}

window.smoothScrollTo = (function () {
    var timer, start, factor;
    return function (target) {
        var offset = window.pageYOffset,
            delta = target - window.pageYOffset;
        start = Date.now();
        factor = 0;
        if( timer ) {
            clearInterval(timer);
        }

        function step() {
            var y;
            factor = (Date.now() - start) / duration;
            if( factor >= 1 ) {
                clearInterval(timer);
                factor = 1;
            } 
            y = factor * delta + offset;
            window.scrollBy(0, y - window.pageYOffset);
        }

        timer = setInterval(step, 10);
        return timer;
    };
}());

window.onkeydown = keydown;
//End Fixing Sticky Header

// Activate tooltips
$('.tipped').tooltip();


// Wufoo Script

/*addEvent(window, 'load', initForm);

var highlight_array = new Array();

function initForm(){
    initializeFocus();
    var activeForm = document.getElementsByTagName('form')[0];
    addEvent(activeForm, 'submit', disableSubmitButton);
    ifInstructs();
    showRangeCounters();
}

function disableSubmitButton() {
    document.getElementById('saveForm').disabled = true;
}

// for radio and checkboxes, they have to be cleared manually, so they are added to the
// global array highlight_array so we dont have to loop through the dom every time.
function initializeFocus(){
    var fields = getElementsByClassName(document, "*", "field");
    
    for(i = 0; i < fields.length; i++) {
        if(fields[i].type == 'radio' || fields[i].type == 'checkbox') {
            fields[i].onclick = function() {highlight(this, 4);};
            fields[i].onfocus = function() {highlight(this, 4);};
        }
        else if(fields[i].className.match('addr') || fields[i].className.match('other')) {
            fields[i].onfocus = function(){highlight(this, 3);};
        }
        else {
            fields[i].onfocus = function(){highlight(this, 2); };
        }
    }
}

function highlight(el, depth){
    if(depth == 2){var fieldContainer = el.parentNode.parentNode;}
    if(depth == 3){var fieldContainer = el.parentNode.parentNode.parentNode;}
    if(depth == 4){var fieldContainer = el.parentNode.parentNode.parentNode.parentNode;}
    
    addClassName(fieldContainer, 'focused', true);
    var focusedFields = getElementsByClassName(document, "*", "focused");
    
    for(i = 0; i < focusedFields.length; i++) {
        if(focusedFields[i] != fieldContainer){
            removeClassName(focusedFields[i], 'focused');
        }
    }
}

function ifInstructs(){
    var container = document.getElementById('public');
    if(container){
        removeClassName(container,'noI');
        var instructs = getElementsByClassName(document,"*","instruct");
        if(instructs == ''){
            addClassName(container,'noI',true);
        }
        if(container.offsetWidth <= 450){
            addClassName(container,'altInstruct',true);
        }
    }
}

function showRangeCounters(){
    counters = getElementsByClassName(document, "em", "currently");
    for(i = 0; i < counters.length; i++) {
        counters[i].style.display = 'inline';
    }
}

function validateRange(ColumnId, RangeType) {
    if(document.getElementById('rangeUsedMsg'+ColumnId)) {
        var field = document.getElementById('Field'+ColumnId);
        var msg = document.getElementById('rangeUsedMsg'+ColumnId);

        switch(RangeType) {
            case 'character':
                msg.innerHTML = field.value.length;
                break;
                
            case 'word':
                var val = field.value;
                val = val.replace(/\n/g, " ");
                var words = val.split(" ");
                var used = 0;
                for(i =0; i < words.length; i++) {
                    if(words[i].replace(/\s+$/,"") != "") used++;
                }
                msg.innerHTML = used;
                break;
                
            case 'digit':
                msg.innerHTML = field.value.length;
                break;
        }
    }
}

/*--------------------------------------------------------------------------*/

//http://www.robertnyman.com/2005/11/07/the-ultimate-getelementsbyclassname/
/*function getElementsByClassName(oElm, strTagName, strClassName){
    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];      
        if(oRegExp.test(oElement.className)){
            arrReturnElements.push(oElement);
        }   
    }
    return (arrReturnElements)
}

//http://www.bigbold.com/snippets/posts/show/2630
function addClassName(objElement, strClass, blnMayAlreadyExist){
   if ( objElement.className ){
      var arrList = objElement.className.split(' ');
      if ( blnMayAlreadyExist ){
         var strClassUpper = strClass.toUpperCase();
         for ( var i = 0; i < arrList.length; i++ ){
            if ( arrList[i].toUpperCase() == strClassUpper ){
               arrList.splice(i, 1);
               i--;
             }
           }
      }
      arrList[arrList.length] = strClass;
      objElement.className = arrList.join(' ');
   }
   else{  
      objElement.className = strClass;
      }
}

//http://www.bigbold.com/snippets/posts/show/2630
function removeClassName(objElement, strClass){
   if ( objElement.className ){
      var arrList = objElement.className.split(' ');
      var strClassUpper = strClass.toUpperCase();
      for ( var i = 0; i < arrList.length; i++ ){
         if ( arrList[i].toUpperCase() == strClassUpper ){
            arrList.splice(i, 1);
            i--;
         }
      }
      objElement.className = arrList.join(' ');
   }
}

//http://ejohn.org/projects/flexible-javascript-events/
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj["e"+type+fn] = fn;
    obj[type+fn] = function() { obj["e"+type+fn]( window.event ) };
    obj.attachEvent( "on"+type, obj[type+fn] );
  } 
  else{
    obj.addEventListener( type, fn, false );    
  }
}*/


// Mixpanel code

// Tracking pageview?
mixpanel.track(window.location.pathname);

// Tracking navigation clicks
$('#home').click(function() {
    mixpanel.track_links('#home', 'Nav: Home', {
        'referrer': document.referrer
    });
});
$('#services').click(function() {
    mixpanel.track_links('#services', 'Nav: Services', {
        'referrer': document.referrer
    });
});
$('#portfolio').click(function() {
    mixpanel.track_links('#portfolio', 'Nav: Portfolio', {
        'referrer': document.referrer
    });
});
$('#resources').click(function() {
    mixpanel.track_links('#resources', 'Nav: Resources', {
        'referrer': document.referrer
    });
});
$('#blog').click(function() {
    mixpanel.track_links('#blog', 'Nav: Blog', {
        'referrer': document.referrer
    });
});
$('#about').click(function() {
    mixpanel.track_links('#about', 'Nav: About', {
        'referrer': document.referrer
    });
});
$('#contact').click(function() {
    mixpanel.track_links('#contact', 'Nav: Contact', {
        'referrer': document.referrer
    });
});

// Tracking Portfolio item clicks
$('#portfolio-gsd-toolbox').click(function() {
    mixpanel.track_links('#portfolio-gsd-toolbox', 'Viewed GSD Toolbox', {
        'referrer': document.referrer
    });
});

$('#portfolio-bracelets-by-deb').click(function() {
    mixpanel.track_links('#portfolio-bracelets-by-deb', 'Viewed Bracelets by Deb', {
        'referrer': document.referrer
    });
});
$('#portfolio-fontastic-questions').click(function() {
    mixpanel.track_links('#portfolio-fontastic-questions', 'Viewed Fontastic Questions', {
        'referrer': document.referrer
    });
});
$('#portfolio-gsd-toolbox').click(function() {
    mixpanel.track_links('#portfolio-gsd-toolbox', 'Viewed GSD Toolbox', {
        'referrer': document.referrer
    });
});
$('#portfolio-mainichi-japanese').click(function() {
    mixpanel.track_links('#portfolio-mainichi-japanese', 'Viewed Mainichi Japanese', {
        'referrer': document.referrer
    });
});
$('#portfolio-random-nihongo').click(function() {
    mixpanel.track_links('#portfolio-random-nihongo', 'Viewed Japanese Challenge', {
        'referrer': document.referrer
    });
});
$('#portfolio-sunday-friends').click(function() {
    mixpanel.track_links('#portfolio-sunday-friends', 'Viewed Sunday Friends', {
        'referrer': document.referrer
    });
});

//Tracking CTAs
$('#hero-cta').click(function() {
    mixpanel.track_links('#hero-cta', 'Clicked Hero CTA', {
        'referrer': document.referrer
    });
});