/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var i;

var sectionBlur = document.querySelector('section:nth-of-type(1) div:nth-of-type(2)'); 

var sectionConfirm = document.querySelector('section:nth-of-type(1)>div:nth-of-type(1)'); 

var sectionRemove = document.querySelector('section>section:last-of-type');

var dragBar = document.querySelector('section img:nth-of-type(2)');

//var button = document.getElementById("addtolistbutton"); 
var button = document.querySelectorAll("section>div:nth-of-type(2) button:nth-of-type(1)");

var closeButton = document.getElementById("removefromlistbutton"); 
var removeButton = document.querySelector('section>section:last-of-type button');
var addedToListNumber = document.querySelector('header nav>img'); 

var listAdd = function () {
    console.log("joehoe ", this);
    sectionRemove.style.display = 'block';
	sectionBlur.classList.add('bluranimation');
    sectionConfirm.classList.toggle('confirmanimation');
    dragBar.classList.add('draggablebaranimation');
    
    setTimeout(function(){ 
    sectionBlur.classList.remove('bluranimation');
    sectionConfirm.classList.remove('confirmanimation');
}, 5000);
    
    setTimeout(function(){ 
    button.style.display = 'none';
    closeButton.style.display = 'block';
}, 2000);
    
    document.getElementById("addedremoved").innerHTML = "Added to your list";
    document.getElementById("addedremoved").style.backgroundImage = "url(images/addedcheck.svg)";
    
    addedToListNumber.classList.remove('removedfromlistanimation');
    addedToListNumber.classList.add('addedtolistanimation');
    
    console.log ("added to list");
};

//button.addEventListener('click', listAdd);

for (i = 0; i < button.length; i++) {
    //console.log(i)
    //button[i].addEventListener("click", listAdd);
    console.log("click click", button[i])
    button[i].addEventListener('click',function(){
       console.log('we hebben een klik', this) 
    });
  }

var listRemove = function () {
    sectionRemove.style.display = 'none';
	sectionBlur.classList.toggle('bluranimation');
    sectionConfirm.classList.toggle('confirmanimation');
    dragBar.classList.remove('draggablebaranimation');
    
    setTimeout(function(){ 
    sectionBlur.classList.remove('bluranimation');
    sectionConfirm.classList.remove('confirmanimation');
}, 5000);
    
    setTimeout(function(){ 
     button.style.display = 'block';
    closeButton.style.display = 'none';
}, 2000);
   
    document.getElementById("addedremoved").innerHTML = "Removed from list";
    document.getElementById("addedremoved").style.backgroundImage = 'none';
    
    addedToListNumber.classList.remove('addedtolistanimation');
    addedToListNumber.classList.add('removedfromlistanimation');
    
    console.log ("removed from list");
};

removeButton.addEventListener('click', listRemove);

