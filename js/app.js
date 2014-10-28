/* app.js
* main script file for our little application
* */

"use strict";

//select all navigation links
var allNavLinks = $('nav a');

// select a img
var allImgs = $('img');

//select all sections

var allSections = $('section');

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
