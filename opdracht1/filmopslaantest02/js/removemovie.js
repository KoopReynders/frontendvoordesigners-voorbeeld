/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var sectionRemove = document.querySelector('main.yourwatchlist section:nth-of-type(2)');  
var button = document.getElementById("removefromlistbutton");


var listRemove = function () {
	sectionRemove.classList.add('removefromlistanimation');
    
    setTimeout(function(){ 
    sectionRemove.classList.add('removefromlistanimation');
}, 25000);
    
    setTimeout(function(){ 
    sectionRemove.style.display = 'none';
}, 2500);
    
     document.getElementById("inwatchlist").innerHTML = "3 movies &amp; 1 TV show";
    
    console.log ("removed from list");
};

button.addEventListener('click', listRemove);

