/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


var i = 0;
var slideIndex = 1;
var movieImages = document.querySelectorAll('main.detailpage section>div:last-of-type>img');
var prevButton = document.querySelector('main.detailpage section>div:last-of-type>button:nth-of-type(1)');
var nextButton = document.querySelector('main.detailpage section>div:last-of-type>button:nth-of-type(2)');

function showImages(n) {
  if (n > movieImages.length) {
      slideIndex = 1;
  }   
    
  if (n < 1) {
      slideIndex = movieImages.length;
  }
    
  for (i = 0; i < movieImages.length; i++) {
     movieImages[i].style.display = "none";  
  }
  
  movieImages[slideIndex-1].style.display = "block"; 
}

showImages(slideIndex);

function plusDivs(n) {
  showImages(slideIndex += n);
}

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


///////////////////////////

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var swipeZone = document.querySelector('main.detailpage section');

function handleGesture() {
    if (touchendX <= touchstartX) {
        console.log('Swiped left');
        plusDivs(1);
    }
    
    if (touchendX >= touchstartX) {
        console.log('Swiped right');
        plusDivs(-1);
    }
    
    if (touchendY <= touchstartY) {
        console.log('Swiped up');
    }
    
    if (touchendY >= touchstartY) {
        console.log('Swiped down');
    }
    
    if (touchendY === touchstartY) {
        console.log('Tap');
    }
}

swipeZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

swipeZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 