/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var i;
var header = document.querySelector('header');
var main = document.querySelector('main');
//var section = document.querySelector('section');


var requestURL = 'http://dennistel.nl/movies';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

console.log(request);

request.onload = function() {
  var superHeroes = request.response;
    
    setTimeout(function(){
        main.innerHTML = "";
        main.classList.add("mainanimation");
        showHeroes(superHeroes);
        
        var sectionBlur = document.querySelector('section:nth-of-type(1) div:nth-of-type(2)'); 
var sectionConfirm = document.querySelector('section:nth-of-type(1)>div:nth-of-type(1)'); 
var sectionRemove = document.querySelector('section>section:last-of-type');
var dragBar = document.querySelector('section img:nth-of-type(2)');
var button = document.querySelector("section>div:nth-of-type(2)>button:nth-of-type(1)");
var closeButton = document.querySelector("section>div:nth-of-type(2)>button:nth-of-type(2)");
var removeButton = document.querySelector('section>section:last-of-type button');
var addedToListNumber = document.querySelector('header nav>img'); 

var listAdd = function () {
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

    button.addEventListener('click', listAdd);

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
        
        
        // MORE INFO FUNCTIE
        var sectionMoreInfo = document.querySelector('section>div:nth-of-type(3)'); 
var sectionMoreInfoContent = document.querySelector('section>div:nth-of-type(3)>div'); 

var touchButton = document.querySelector("section>div:nth-of-type(2)>button:nth-of-type(3)");



var moreInfo = function () {
    event.preventDefault();
    sectionMoreInfo.style.display = 'block';
	sectionMoreInfo.classList.add('extrainfoanimation');
    sectionMoreInfoContent.classList.add('extrainfocontentanimation');
    console.log ("show more info");
};

touchButton.addEventListener('touchstart', moreInfo, false);

var moreInfoRemove = function () {
    sectionMoreInfo.style.display = 'none';
    sectionMoreInfo.classList.remove('extrainfoanimation');
    sectionMoreInfoContent.classList.remove('extrainfocontentanimation');    
    console.log ("remove more info");
};

touchButton.addEventListener('touchend', moreInfoRemove, false);
        
    }, 4000);
    
};

function showHeroes(jsonObj) {
    
  var heroes = jsonObj;
    console.log(heroes.length);

  for (i = 0; i < heroes.length; i++) {
      var mySection = document.createElement('section');
      
      var myDiv1 = document.createElement('div');
      var myPara1 = document.createElement('p');
      var myH21 = document.createElement('h2');
      
      myPara1.textContent = heroes[i].title + ' is';
      myH21.textContent = 'Added to your list';
     
      myDiv1.appendChild(myPara1);
      myDiv1.appendChild(myH21);
      
      mySection.appendChild(myDiv1);
      
      var myDiv2 = document.createElement('div');
      var myImg1 = document.createElement('img');
      var myButton1 = document.createElement('button');
      myButton1.setAttribute("id", "addtolistbutton");
      var myButton2 = document.createElement('button');
      myButton2.setAttribute("id", "removefromlistbutton");
      var myButton3 = document.createElement('button');
      myButton3.setAttribute("id", "moreinfobutton");
      var myImg2 = document.createElement('img');
      
      var myDiv3 = document.createElement('div');
      var myPara2 = document.createElement('p');
      var myH22 = document.createElement('h2');
      
      myImg1.src = heroes[i].cover;
      myImg2.src = 'images/dragbar.svg';
      myPara2.textContent = heroes[i].genres;
      myH22.textContent = heroes[i].title;
      
      myDiv2.appendChild(myImg1);
      myDiv2.appendChild(myButton1);
      myDiv2.appendChild(myButton2);
      myDiv2.appendChild(myButton3);
      myDiv2.appendChild(myImg2);
      myDiv2.appendChild(myDiv3);
      
      myDiv3.appendChild(myPara2);
      myDiv3.appendChild(myH22);
      
      mySection.appendChild(myDiv2);
      
      var myDiv4 = document.createElement('div');
      
      var myDiv5 = document.createElement('div');
      var myImg3 = document.createElement('img');
      var myPara3 = document.createElement('p');
      
      myImg3.src = 'images/The-evil-dead-2013-movie-logo.png';
      myPara3.textContent = heroes[i].release_date;
      
      var myUl1 = document.createElement('ul');
      var myLi1 = document.createElement('li');
      var myImg4 = document.createElement('img');
      var myLi2 = document.createElement('li');
      var myImg5 = document.createElement('img');
      var myLi3 = document.createElement('li');
      var myImg6 = document.createElement('img');
      var myLi4 = document.createElement('li');
      var myImg7 = document.createElement('img');
      
    myImg4.src = 'images/kijkwijzer-1.svg';
    myImg5.src = 'images/kijkwijzer-angst.svg';
    myImg6.src = 'images/kijkwijzer-geweld.svg';
    myImg7.src = 'images/kijkwijzer-grof-taalgebruik.svg';
      
      var myPara4 = document.createElement('p');
      var myPara5 = document.createElement('p');
      
      myPara4.textContent = '2h 3m';
      myPara5.textContent = heroes[i].simple_plot;
      
      myDiv4.appendChild(myDiv5);
      myDiv5.appendChild(myImg3);
      myDiv5.appendChild(myPara3);
      
      myDiv5.appendChild(myUl1);
      myUl1.appendChild(myLi1);
      myLi1.appendChild(myImg4);
      myUl1.appendChild(myLi2);
      myLi2.appendChild(myImg5);
      myUl1.appendChild(myLi3);
      myLi3.appendChild(myImg6);
      myUl1.appendChild(myLi4);
      myLi4.appendChild(myImg7);
      
      myDiv5.appendChild(myPara4);
      myDiv5.appendChild(myPara5);
      
      mySection.appendChild(myDiv4);
      
      var mySection2 = document.createElement('section');
      var myButton4 = document.createElement('button');
      var myH32 = document.createElement('h3');
      
      
      mySection2.appendChild(myButton4);
      mySection2.appendChild(myH32);
      mySection.appendChild(mySection2);
      
      main.appendChild(mySection);
  }
}

