function main() {



//menu

var theToggle = document.getElementById('toggle');
// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

// smooth scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//on scroll show
$(document).ready(function() {
$(window).scroll(function() {

  if ($(window).scrollTop() > 500) {  $('#ara2').slideDown(500); $('#ara2achtergrond').fadeIn(500); $('.foto1').slideDown(500); $('.foto2').fadeIn(1000)
  }
  if ($(window).scrollTop() < 500) {  $('#ara2').slideUp(500); $('#ara2achtergrond').fadeOut(1000);$('.foto1').slideUp(500); $('.foto2').fadeOut(1000);
  }
});
});



window.initMap = function(){
  var myLatLng = {lat:51.217841 , lng: 4.399692};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng
  });


var myLatlng = new google.maps.LatLng(51.204013, 4.367858);
var marker = new google.maps.Marker({
position: myLatlng,
map: map,
title:"Locatie 1"
});

var myLatlng = new google.maps.LatLng(51.220757, 4.391865);
var marker = new google.maps.Marker({
position: myLatlng,
map: map,
title:"Locatie 2"
});

var myLatlng = new google.maps.LatLng(51.231596, 4.398884);
var marker = new google.maps.Marker({
position: myLatlng,
map: map,
title:"Locatie 1"
});
}


}


window.onload = function() {
       main();
}
