
/*
Author: Chinatsu Kawakami
created Date: 2017-09-13
Modified Date: 2017-09-13
Description: This is the main js file to add function
*/


(function(){
	'use strict';

var commnet = document.getElementById('comment');

var label = document.getElementById('label');

var LIMIT = 30;

label.innerHTML = LIMIT;

commnet.addEventListener('keyup',function(){
	var remaining = LIMIT - this.value.length;

	label.innerHTML= remaining;
});

})();