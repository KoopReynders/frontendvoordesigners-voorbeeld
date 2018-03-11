/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var storylineInfo = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>p:nth-of-type(1)');
var castInfo = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>div');
var trailersInfo = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>p:nth-of-type(2)');

var storyline = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>h3:nth-of-type(1)');
var cast = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>h3:nth-of-type(2)');
var trailers = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>h3:nth-of-type(3)');

function showInfo(v) {
    v.classList.add('infoappear');
    
    if (v === storylineInfo) {
        storyline.classList.add('activeinfo');
        cast.classList.remove('activeinfo');
        trailers.classList.remove('activeinfo');
        
        castInfo.classList.remove('infoappear');
        trailersInfo.classList.remove('infoappear');
    }
    
    if (v === castInfo) {
        cast.classList.add('activeinfo');
        storyline.classList.remove('activeinfo');
        trailers.classList.remove('activeinfo');
        
        storylineInfo.classList.remove('infoappear');
        trailersInfo.classList.remove('infoappear');
    }
    
    if (v === trailersInfo) {
        trailers.classList.add('activeinfo');
        storyline.classList.remove('activeinfo');
        cast.classList.remove('activeinfo');
        
        storylineInfo.classList.remove('infoappear');
        castInfo.classList.remove('infoappear');
    }
}

showInfo(storylineInfo);

storyline.addEventListener("click", function(){
    showInfo(storylineInfo);
}, false);

cast.addEventListener("click", function(){
    showInfo(castInfo);
}, false);

trailers.addEventListener("click", function(){
    showInfo(trailersInfo);
}, false);
