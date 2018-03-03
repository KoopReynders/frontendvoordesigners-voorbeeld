/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


var i = 0;
var slideIndex = 1;
var movieImages = document.querySelectorAll('main.detailpage section>div:last-of-type>img');
var prevButton = document.querySelector('main.detailpage section>div:last-of-type>button:nth-of-type(1)');
var nextButton = document.querySelector('main.detailpage section>div:last-of-type>button:nth-of-type(2)');

function showImages(n) {
  if (n > movieImages.length) {
      slideIndex = 1;}   
    
  if (n < 1) {
      slideIndex = movieImages.length;}
    
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

nextButton.addEventListener("click", function(){
    plusDivs(1);
}, false);

