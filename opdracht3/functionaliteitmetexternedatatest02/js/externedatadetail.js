/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var i;
//var header = document.querySelector('header');
var main = document.querySelector('main');
//var section = document.querySelector('section');


var requestURL = 'http://dennistel.nl/movies/1';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

console.log(request);

request.onload = function() {
  var superHeroes = request.response;
//    main.innerHTML = "";
  showHeroes(superHeroes);
};

function showHeroes(jsonObj) {
  var heroes = jsonObj;
    var actors = jsonObj.actors;
    var reviews = jsonObj.reviews;
    console.log(heroes.length);

 
      var mySection = document.createElement('section');
      
      var myDiv1 = document.createElement('div');
      var myPara1 = document.createElement('p');
      var myH21 = document.createElement('h2');
      
      myPara1.textContent = heroes.title + ' is';
    myH21.textContent = 'added to your list';
     
      myDiv1.appendChild(myPara1);
      myDiv1.appendChild(myH21);
      
      mySection.appendChild(myDiv1);
      
      var myDiv2 = document.createElement('div');
      var myImg1 = document.createElement('img');
      var myButton1 = document.createElement('button');
      var myButton2 = document.createElement('button');
      var myAnchor1 = document.createElement('a');
      var myImg2 = document.createElement('img');
    
    myImg1.src = heroes.cover;
    myImg2.src = 'images/dragbar.svg';
      
      var myDiv3 = document.createElement('div');
      var myPara2 = document.createElement('p');
      var myH22 = document.createElement('h2');
      
      myPara2.textContent = heroes.genres;
      myH22.textContent = heroes.title;
      
      myDiv2.appendChild(myImg1);
      myDiv2.appendChild(myButton1);
      myDiv2.appendChild(myButton2);
      myDiv2.appendChild(myAnchor1);
      myDiv2.appendChild(myImg2);
      myDiv2.appendChild(myDiv3);
      
      myDiv3.appendChild(myPara2);
      myDiv3.appendChild(myH22);
      
      mySection.appendChild(myDiv2);
      
      var myDiv4 = document.createElement('div');
      var myPara3 = document.createElement('p');
    
    myPara3.textContent = heroes.release_date;
      
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
    
    myPara4.textContent = '2h 3m';
      
      myDiv3.appendChild(myDiv4);
      myDiv4.appendChild(myPara3);
      myDiv4.appendChild(myUl1); 
      myUl1.appendChild(myLi1);
      myLi1.appendChild(myImg4);
      myUl1.appendChild(myLi2);
      myLi2.appendChild(myImg5);
      myUl1.appendChild(myLi3);
      myLi3.appendChild(myImg6);
      myUl1.appendChild(myLi4);
      myLi4.appendChild(myImg7); 
      myDiv4.appendChild(myPara4);
    
    var myDiv5 = document.createElement('div');
    var myH31 = document.createElement('h3');
    var myH32 = document.createElement('h3');
    var myH33 = document.createElement('h3');
    
    myH31.textContent = 'Storyline';
    myH32.textContent = 'Cast';
    myH33.textContent = 'Trailers';
    
    var myDiv6 = document.createElement('div');
    var mySpan1 = document.createElement('span');
    
    var myPara5 = document.createElement('p');
    
    myPara5.textContent = heroes.plot;
    
    myDiv4.appendChild(myDiv5);
    myDiv5.appendChild(myH31);
    myDiv5.appendChild(myH32);
    myDiv5.appendChild(myH33);
    myDiv5.appendChild(myPara5);
    
    myDiv5.appendChild(myDiv6);
    myDiv6.appendChild(mySpan1);
    
    var myDiv7 = document.createElement('div');
    
    for (i = 0; i < actors.length; i++) {
    
    var myDiv8 = document.createElement('div');
    var myImg8 = document.createElement('img');
    var myH41 = document.createElement('h4');
    
    myImg8.src = actors[i].url_photo;
    myH41.textContent = actors[i].actor_name;
    
    myDiv5.appendChild(myDiv7);
    
    myDiv7.appendChild(myDiv8);
    myDiv8.appendChild(myImg8);
    myDiv8.appendChild(myH41);
    
    }
    
    var myDiv9 = document.createElement('div');
    var myDiv10 = document.createElement('div');
    var myIframe1 = document.createElement('iframe');
    
    myIframe1.src = 'https://www.youtube.com/embed/44LdLqgOpjo?rel=0&amp;showinfo=0';
    
     myDiv5.appendChild(myDiv9);
    myDiv9.appendChild(myDiv10);
myDiv10.appendChild(myIframe1);
    
    var myAnchor2 = document.createElement('a');
    
     myAnchor2.textContent = "play";
    
      myDiv3.appendChild(myAnchor2);
    
    var myDiv11 = document.createElement('div');
    
    mySection.appendChild(myDiv11);
    
    var mySection2 = document.createElement('section');
    var myButton3 = document.createElement('button');
    var myH34 = document.createElement('h3');
    
    myButton3.textContent = 'Remove from list';
    myH34.textContent = 'Remove from list';
    
    mySection2.appendChild(myButton3);
    mySection2.appendChild(myH34);
    mySection.appendChild(mySection2);
    
    var myDiv12 = document.createElement('div');
    
    for (i = 0; i < reviews.length; i++) {
    
    var myDiv13 = document.createElement('div');
    var myPara6 = document.createElement('p');
    var myH23 = document.createElement('h2');
    var myPara7 = document.createElement('p');
    var myImg9 = document.createElement('img');
        
        myPara6.textContent = 'Review no. ' + reviews[i].id ;
        myH23.textContent = 'score';
        myPara7.textContent = reviews[i].score;
        myImg9.src = 'images/movierating.svg';
        
    
    myDiv12.appendChild(myDiv13);
    
    myDiv13.appendChild(myPara6);
    myDiv13.appendChild(myH23);
    myDiv13.appendChild(myPara7);
    myDiv13.appendChild(myImg9);
        
    }
    
    var myButton4 = document.createElement('button');
    var myButton5 = document.createElement('button');
    
    myDiv12.appendChild(myButton4);
    myDiv12.appendChild(myButton5);
    
    
    mySection.appendChild(myDiv12);
    
      
      main.appendChild(mySection);
  
}

