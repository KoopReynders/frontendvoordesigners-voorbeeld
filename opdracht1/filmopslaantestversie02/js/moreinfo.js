/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var sectionMoreInfo = document.querySelector('section>div:nth-of-type(3)'); 
var sectionMoreInfoContent = document.querySelector('section>div:nth-of-type(3)>div'); 
var touchButton = document.getElementById("moreinfobutton");



var moreInfo = function () {
    sectionMoreInfo.style.display = 'block';
	sectionMoreInfo.classList.add('extrainfoanimation');
    sectionMoreInfoContent.classList.add('extrainfocontentanimation');
    
    
    console.log ("show more info");
};

touchButton.addEventListener('touchstart', moreInfo, false);
//touchButton.addEventListener('click', moreInfo, false);

var moreInfoRemove = function () {
    sectionMoreInfo.style.display = 'none';
    sectionMoreInfo.classList.remove('extrainfoanimation');
    sectionMoreInfoContent.classList.remove('extrainfocontentanimation');
    
//    sectionMoreInfo.classList.toggle('extrainfotouchedanimation');
//    setTimeout(function(){ 
//    sectionMoreInfo.style.display = 'none';
//}, 1000);
    
    
    console.log ("remove more info");
};

touchButton.addEventListener('touchend', moreInfoRemove, false);

//var listRemove = function () {
//	sectionBlur.classList.toggle('bluranimation');
//    sectionConfirm.classList.toggle('confirmanimation');
//    
//    setTimeout(function(){ 
//    sectionBlur.classList.remove('bluranimation');
//    sectionConfirm.classList.remove('confirmanimation');
//}, 5000);
//    
//    setTimeout(function(){ 
//     button.style.display = 'block';
//    closeButton.style.display = 'none';
//}, 2000);
//   
//    document.getElementById("addedremoved").innerHTML = "Removed from your list";
//    document.getElementById("addedremoved").style.backgroundImage = 'none';
//    
//    addedToListNumber.classList.remove('addedtolistanimation');
//    addedToListNumber.classList.add('removedfromlistanimation');
//    
//    console.log ("removed from list");
//};
//
//closeButton.addEventListener('click', listRemove);
//
