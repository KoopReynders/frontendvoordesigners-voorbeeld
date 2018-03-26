/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var storylineInfo = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>p:nth-of-type(1)');
var castInfo = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>div:nth-of-type(2)');
var trailersInfo = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>div:nth-of-type(3)');

var storyline = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>h3:nth-of-type(1)');
var cast = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>h3:nth-of-type(2)');
var trailers = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>h3:nth-of-type(3)');

var underline = document.querySelector('main.detailpage section div:nth-of-type(2)>div>div>div>div:nth-of-type(1)>span');

function showInfo(v) {
    v.classList.add('infoappear');
    
    if (v === storylineInfo) {
        storyline.classList.add('activeinfo');
        underline.classList.add('storylineunderline');
        
        cast.classList.remove('activeinfo');
        trailers.classList.remove('activeinfo');
        
        castInfo.classList.remove('infoappear');
        trailersInfo.classList.remove('infoappear');
        
        underline.classList.remove('castunderline');
        underline.classList.remove('trailersunderline');
    }
    
    if (v === castInfo) {
        cast.classList.add('activeinfo');
        underline.classList.add('castunderline');
        
        storyline.classList.remove('activeinfo');
        trailers.classList.remove('activeinfo');
        
        storylineInfo.classList.remove('infoappear');
        trailersInfo.classList.remove('infoappear');
        
        underline.classList.remove('storylineunderline');
        underline.classList.remove('trailersunderline');
    }
    
    if (v === trailersInfo) {
        trailers.classList.add('activeinfo');
        underline.classList.add('trailersunderline');
        
        storyline.classList.remove('activeinfo');
        cast.classList.remove('activeinfo');
        
        storylineInfo.classList.remove('infoappear');
        castInfo.classList.remove('infoappear');
        
        underline.classList.remove('storylineunderline');
        underline.classList.remove('castunderline');
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
