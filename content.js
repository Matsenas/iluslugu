// Asenda kõik pildid kassipiltidega
//var images = document.getElementsByTagName('img');
//for (var i = 0, l = images.length; i < l; i++) {
//  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
//}

// Terviseandmete sinise tausta eemaldus
var terviseandmed = document.getElementById("healthRecordBigBox");
terviseandmed.classList.remove("blue-bg");

// Wrap sisu lingid in div
// element that will be wrapped
var booking_box = document.getElementById("booking_box");
var logs_box = document.getElementById("logs_box");
var importantNumbers_box = document.getElementById("importantNumbers_box");
// create wrapper container
var wrapper = document.createElement('li');
wrapper.setAttribute("id", "health-data-btns");
// insert wrapper before el in the DOM tree
booking_box.parentNode.insertBefore(wrapper, booking_box);
// move elements into wrapper
wrapper.appendChild(booking_box);
wrapper.appendChild(logs_box);
wrapper.appendChild(importantNumbers_box);