/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var sectionGradient = document.querySelector('main section>div:nth-of-type(2)'); 
var button = document.getElementById("addtolistbutton");
var closeButton = document.getElementById("removefromlistbutton"); 
var addedToListNumber = document.querySelector('header nav>img'); 


var listAdd = function () {
	sectionGradient.classList.add('addtolistgradientanimation');
   
    button.style.display = 'none';
    closeButton.style.display = 'block';
    
    addedToListNumber.classList.add('addedtolistanimation');
    addedToListNumber.classList.remove('removedfromlistanimation');

    console.log ("added to list");
};

button.addEventListener('click', listAdd);

var listRemove = function () {
	sectionGradient.classList.remove('addtolistgradientanimation');
   
    button.style.display = 'block';
    closeButton.style.display = 'none';
    
    addedToListNumber.classList.remove('addedtolistanimation');
    addedToListNumber.classList.add('removedfromlistanimation');
    
    console.log ("removed from list");
};

closeButton.addEventListener('click', listRemove);

