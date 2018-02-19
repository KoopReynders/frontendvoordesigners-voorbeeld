/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var sectionConfirm = document.querySelector('section>div:nth-of-type(1)'); 
var sectionRemoveButton = document.querySelector('section>button'); 
var sectionBackground = document.querySelector('section img');
var button = document.getElementById("addtolistbutton");
var closeButton = document.getElementById("removefromlistbutton"); 
var addedToListNumber = document.querySelector('header nav>img'); 


var listAdd = function () {
    sectionConfirm.classList.add('confirmanimation');
    sectionBackground.classList.add('addedtolistbackgroundanimation');
    sectionRemoveButton.classList.add('removableanimation');
    
    setTimeout(function(){ 
    sectionConfirm.classList.remove('confirmanimation');
    sectionBackground.classList.remove('addedtolistbackgroundanimation');
}, 3000);
    
    setTimeout(function(){ 
    button.style.display = 'none';
    closeButton.style.display = 'block';
}, 2000);
    
    document.getElementById("addedremoved").innerHTML = "Added";
    document.querySelector('section:nth-of-type(1)>div:nth-of-type(1)').style.backgroundImage = 'url(images/addedtolistblue.svg)';
    document.querySelector('section:nth-of-type(1)>div:nth-of-type(1)').style.paddingTop = '4.5rem';
    
    addedToListNumber.classList.remove('removedfromlistanimation');
    addedToListNumber.classList.add('addedtolistanimation');
};

button.addEventListener('click', listAdd);

var listRemove = function () {
	sectionConfirm.classList.toggle('confirmanimation');
    sectionBackground.classList.add('addedtolistbackgroundanimation');
    sectionRemoveButton.classList.add('removableconfirmanimation');
    
    setTimeout(function(){ 
    sectionConfirm.classList.remove('confirmanimation');
    sectionBackground.classList.remove('addedtolistbackgroundanimation');
    sectionRemoveButton.classList.remove('removableanimation');
    sectionRemoveButton.classList.remove('removableconfirmanimation');
}, 3000);
    
    setTimeout(function(){ 
     button.style.display = 'block';
    closeButton.style.display = 'none';
}, 2000);
   
    document.getElementById("addedremoved").innerHTML = "Removed";
    document.querySelector('section:nth-of-type(1)>div:nth-of-type(1)').style.backgroundImage = 'none';
    document.querySelector('section:nth-of-type(1)>div:nth-of-type(1)').style.paddingTop = '1.5rem';
    
    addedToListNumber.classList.remove('addedtolistanimation');
    addedToListNumber.classList.add('removedfromlistanimation');
    
    
};

sectionRemoveButton.addEventListener('click', listRemove);

