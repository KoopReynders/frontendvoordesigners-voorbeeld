/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

// VARIABLES CAROUSEL SLIDES
var i = 0;
var slideIndex = 1; // Begin bij eerste image
var movieImages = document.querySelectorAll('main.detailpage section>div:last-of-type>img');
var prevButton = document.querySelector('main.detailpage section>div:last-of-type>button:nth-of-type(1)');
var nextButton = document.querySelector('main.detailpage section>div:last-of-type>button:nth-of-type(2)');

// VARIABLES TOUCH/ SWIPE GESTURE
var touchstartX = 0;
var touchendX = 0;
var swipeZone = document.querySelector('main.detailpage section');


// FUNCTION OM IMAGES TE LATEN ZIEN
function showImages(n) {
  if (n > movieImages.length) {
      slideIndex = 1;
      // Als n groter wordt dan de totale image array dan moet die resetten naar slideIndex 1.
  }   
    
  if (n < 1) {
      slideIndex = movieImages.length;
      // Als n kleiner wordt dan 1, dan moet de slideIndex het cijfer worden van de image uit de array. Het is voornamelijk voor de terug knop.
  }
    
  for (i = 0; i < movieImages.length; i++) {
     movieImages[i].style.display = "none";  
      // De vorige image die actief was moet terug gezet worden op display none.
  }
  
  movieImages[slideIndex-1].style.display = "block"; // Laat de image zien uit de array met -1 anders wordt de eerste overgeslagen.
}

showImages(slideIndex); // Om de eerste image al zichtbaar te maken.

function plusDivs(n) {
  showImages(slideIndex += n);
    console.log(slideIndex);
}

// EVENTLISTENER DIE LUISTERT NAAR EEN CLICK OF KEYDOWN
prevButton.addEventListener("click", function(){
    plusDivs(-1);
}, false);

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 37) {
        plusDivs(-1);
    }
}, false);

nextButton.addEventListener("click", function(){
    plusDivs(1);
}, false);

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 39) {
        plusDivs(1);
    }
}, false);


// FUNCTION DIE BEPAALD WELKE KANT ER OP GESWIPED WORDT
function swipeGesture() {
    if (touchendX <= touchstartX) {
        console.log('Swiped left');
        plusDivs(1);
    }
    
    if (touchendX >= touchstartX) {
        console.log('Swiped right');
        plusDivs(-1);
    }
}

// EVENTLISTENER DIE DE SWIPE REGISTREERT
swipeZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

swipeZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    swipeGesture();
}, false); 