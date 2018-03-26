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
  showHeroes(superHeroes);
};

function showHeroes(jsonObj) {
  var heroes = jsonObj;
    console.log(heroes.length);

  for (i = 0; i < heroes.length; i++) {
      var mySection = document.createElement('section');
      
      var myDiv1 = document.createElement('div');
      var myPara1 = document.createElement('p');
      var myH21 = document.createElement('h2');
      
      myPara1.textContent = heroes[i].title;
     
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
      
      var myUl1 = document.createElement('ul');
      var myLi1 = document.createElement('li');
      var myImg4 = document.createElement('img');
      var myLi2 = document.createElement('li');
      var myImg5 = document.createElement('img');
      var myLi3 = document.createElement('li');
      var myImg6 = document.createElement('img');
      var myLi4 = document.createElement('li');
      var myImg7 = document.createElement('img');
      
      var myPara4 = document.createElement('p');
      var myPara5 = document.createElement('p');
      
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
      
      main.appendChild(mySection);
  }
}

