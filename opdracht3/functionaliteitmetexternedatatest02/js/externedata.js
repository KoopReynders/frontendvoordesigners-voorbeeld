/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var i;
var header = document.querySelector('header');
var main = document.querySelector('main');
//var section = document.querySelector('section');


var requestURL = 'https://joopakerboom.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

console.log(request);

request.onload = function () {
    var superHeroes = request.response;

    setTimeout(function () {
        main.innerHTML = "";
        main.classList.add("mainanimation");
        showHeroes(superHeroes);

        var sectionBlur = document.querySelectorAll('section div:nth-of-type(2)');
        var sectionConfirm = document.querySelectorAll('section>div:nth-of-type(1)');
        var sectionRemove = document.querySelectorAll('section>section:last-of-type');
        var dragBar = document.querySelectorAll('section img:nth-of-type(2)');
        var button = document.querySelectorAll("section>div:nth-of-type(2)>button:nth-of-type(1)");
        var closeButton = document.querySelectorAll("section>div:nth-of-type(2)>button:nth-of-type(2)");
        var addedTitle = document.querySelectorAll('section>div:nth-of-type(1)>h2');
        var removeButton = document.querySelectorAll('section>section:last-of-type button');
        var addedToListNumber = document.querySelector('header nav>img');
//        var b;

        function listAdd(index) {
            sectionRemove[index].style.display = 'block';
            sectionBlur[index].classList.add('bluranimation');
            sectionConfirm[index].classList.toggle('confirmanimation');
            dragBar[index].classList.add('draggablebaranimation');

            setTimeout(function () {
                sectionBlur[index].classList.remove('bluranimation');
                sectionConfirm[index].classList.remove('confirmanimation');
            }, 5000);

            setTimeout(function () {
                button[index].style.display = 'none';
                closeButton[index].style.display = 'block';
            }, 2000);

            addedTitle[index].innerHTML = "Added to your list";
            addedTitle[index].style.backgroundImage = "url(images/addedcheck.svg)";

            addedToListNumber.classList.remove('removedfromlistanimation');
            addedToListNumber.classList.add('addedtolistanimation');

            console.log("added to list");
        }

        //        button.addEventListener('click', listAdd);
        
//        for (b = 0; b < button.length; b++) {
//            button[b].addEventListener("click", function () {
//                listAdd(b);
//            });
//        }
        
        button[0].addEventListener("click", function () {
                var index = 0;
                listAdd(index);
            });
        
        button[1].addEventListener("click", function () {
                var index = 1;
                listAdd(index);
            });
        
        button[2].addEventListener("click", function () {
                var index = 2;
                listAdd(index);
            });
        
        button[3].addEventListener("click", function () {
                var index = 3;
                listAdd(index);
            });

        button[4].addEventListener("click", function () {
                var index = 4;
                listAdd(index);
            });
        
        button[5].addEventListener("click", function () {
                var index = 5;
                listAdd(index);
            });
        

        function listRemove (index) {
            sectionRemove[index].style.display = 'none';
            sectionBlur[index].classList.toggle('bluranimation');
            sectionConfirm[index].classList.toggle('confirmanimation');
            dragBar[index].classList.remove('draggablebaranimation');

            setTimeout(function () {
                sectionBlur[index].classList.remove('bluranimation');
                sectionConfirm[index].classList.remove('confirmanimation');
            }, 5000);

            setTimeout(function () {
                button[index].style.display = 'block';
                closeButton[index].style.display = 'none';
            }, 2000);

            addedTitle[index].innerHTML = "Removed from list";
            addedTitle[index].style.backgroundImage = 'none';

            addedToListNumber.classList.remove('addedtolistanimation');
            addedToListNumber.classList.add('removedfromlistanimation');

            console.log("removed from list");
        }

//        removeButton.addEventListener('click', listRemove);
        
//        for (b = 0; b < button.length; b++) {
//            removeButton[b].addEventListener("click", function () {
//                listRemove();
//            });
//        }
        
        removeButton[0].addEventListener("click", function () {
                var index = 0;
                listRemove(index);
            });
        
        removeButton[1].addEventListener("click", function () {
                var index = 1;
                listRemove(index);
            });
        
        removeButton[2].addEventListener("click", function () {
                var index = 2;
                listRemove(index);
            });
        
        removeButton[3].addEventListener("click", function () {
                var index = 3;
                listRemove(index);
            });
        
        removeButton[4].addEventListener("click", function () {
                var index = 4;
                listRemove(index);
            });
        
        removeButton[5].addEventListener("click", function () {
                var index = 5;
                listRemove(index);
            });


        // MORE INFO FUNCTIE
        var sectionMoreInfo = document.querySelectorAll('section>div:nth-of-type(3)');
        var sectionMoreInfoContent = document.querySelectorAll('section>div:nth-of-type(3)>div');

        var touchButton = document.querySelectorAll("section>div:nth-of-type(2)>button:nth-of-type(3)");

        function moreInfo (index) {
            event.preventDefault();
            sectionMoreInfo[index].style.display = 'block';
            sectionMoreInfo[index].classList.add('extrainfoanimation');
            sectionMoreInfoContent[index].classList.add('extrainfocontentanimation');
            console.log("show more info");
        }

//        touchButton.addEventListener('touchstart', moreInfo, false);
        
        touchButton[0].addEventListener('touchstart', function () {
                var index = 0;
                moreInfo(index);
            });
        
        touchButton[1].addEventListener('touchstart', function () {
                var index = 1;
                moreInfo(index);
            });
        
        touchButton[2].addEventListener('touchstart', function () {
                var index = 2;
                moreInfo(index);
            });
        
        touchButton[3].addEventListener('touchstart', function () {
                var index = 3;
                moreInfo(index);
            });
        
        touchButton[4].addEventListener('touchstart', function () {
                var index = 4;
                moreInfo(index);
            });
        
        touchButton[5].addEventListener('touchstart', function () {
                var index = 5;
                moreInfo(index);
            });

        function moreInfoRemove (index) {
            sectionMoreInfo[index].style.display = 'none';
            sectionMoreInfo[index].classList.remove('extrainfoanimation');
            sectionMoreInfoContent[index].classList.remove('extrainfocontentanimation');
            console.log("remove more info");
        }

//        touchButton.addEventListener('touchend', moreInfoRemove, false);
        
        touchButton[0].addEventListener('touchend', function () {
                var index = 0;
                moreInfoRemove(index);
            });
        
        touchButton[1].addEventListener('touchend', function () {
                var index = 1;
                moreInfoRemove(index);
            });
        
        touchButton[2].addEventListener('touchend', function () {
                var index = 2;
                moreInfoRemove(index);
            });
        
        touchButton[3].addEventListener('touchend', function () {
                var index = 3;
                moreInfoRemove(index);
            });
        
        touchButton[4].addEventListener('touchend', function () {
                var index = 4;
                moreInfoRemove(index);
            });
        
        touchButton[5].addEventListener('touchend', function () {
                var index = 5;
                moreInfoRemove(index);
            });

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
        var myButton2 = document.createElement('button');
        var myButton3 = document.createElement('button');
        var myImg2 = document.createElement('img');

        var myDiv3 = document.createElement('div');
        var myAnchor1 = document.createElement('a');
        var myPara2 = document.createElement('p');
        var myH22 = document.createElement('h2');

        myImg1.src = heroes[i].cover;
        myImg2.src = 'images/dragbar.svg';
        myAnchor1.setAttribute("href", "movie" + heroes[i].id + ".html");
        myPara2.textContent = heroes[i].genres;
        myH22.textContent = heroes[i].title;

        myDiv2.appendChild(myImg1);
        myDiv2.appendChild(myButton1);
        myDiv2.appendChild(myButton2);
        myDiv2.appendChild(myButton3);
        myDiv2.appendChild(myImg2);
        myDiv2.appendChild(myDiv3);

        myAnchor1.appendChild(myPara2);
        myAnchor1.appendChild(myH22);
        myDiv3.appendChild(myAnchor1);

        mySection.appendChild(myDiv2);

        var myDiv4 = document.createElement('div');

        var myDiv5 = document.createElement('div');
        var myImg3 = document.createElement('img');
        var myPara3 = document.createElement('p');

//        myImg3.src = 'images/The-evil-dead-2013-movie-logo.png';
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
