/* app.js
* main script file for our little application
* */

"use strict";

//select all navigation links
var allNavLinks = $('nav a');

// select a img
var allImgs = $('img');

var tile = 'img/sec1.jpg';
var info = 'some other data';
var gameBoard = $('#game-board');

//create and configure a new <img> element
var newTile = $(document.createElement('img')); 

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

// use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile); //first param is a key
newTile.data('tileInfo', info); //second param is a value 

// add to the board
gameBoard.append(newTile);

// when an img on board is clicked
$('#game-board img').click(function(){
	// this refers to the dom element that raised the event
	// wrapped in jQuery $() to get more functionality
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('atl', tileData2);

	console.log(tileData1);
	console.log(tileData2);
})

var array = ['a', 'b', 'c', 'd'];

_.forEach(array, function(element, index) {

 console.log(element);
 console.log(index);

});

var numArray = [1,2,3,4,5,6,7,8,9,10];
var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

var shuffledArray = _.shuffle(numArray);
console.log(shuffledArray);

var startTime = _.now();
console.log(startTime);

var timer;
timer = window.setInterval(onTimer, 1000);

function onTimer() {
 //compare _.now() to start time to get elapsed time
 //Math.floor() rounds down to the nearest integer
 var elapsedSeconds = Math.floor((_.now() - startTime) / 1000);
 console.log(elapsedSeconds);
 $('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer() {
	window.clearInterval(timer);
	$('#game-board').empty();
}

$('.jumbotron').click(stopTimer);

//select all sections

/* var allSections = $('section');

function onReady() {
	//add attribute of target with blank value to each nav link
	//allNavLinks.attr('target', '_blank');
	//$('nav').slideUp(2000);
	//$('nav').slideDown();
	allSections.hide();
}

$('#confirm-exit-button').click(function() {
	window.location.href = 'http://courses.washington.edu/info343/morris';
})

$('exit-button').dblclick(function() {
	//show the modal to the world!
	$('#confirm-exit-modal').modal();
})

allImgs.hover(function() {
	//console.log($(this));
	$(this).addClass('awesomesauce');

});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

 allNavLinks.click(function() {
	//the cooler jQuery this- its totally money
	//console.log($(this));
	//plain version of this
	//console.log(this);
	//acts on the jQuery object containing this element
	//$(this).addClass('awesomesauce');
	allSections.hide();
	$($(this).attr('href')).fadeToggle(1000).addClass('awesomesauce');
	console.log($(this).attr('href'));
}); 
 


$(onReady);


*/
