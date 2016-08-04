// ------------------------------------
//
// THE MAIN JAVASCRIPT FILE
//
// ------------------------------------

/*
* Matt though this app only needs one file I left this
* so you can see how you can compile multiple files together
* this is the one file we'd include in our app and we'll use the
* node and grunt compile to merge all the others into this one.
*/

// ------------------------------------
// Includes
// ------------------------------------

var Tasks = require('./modules/tasks');

// ------------------------------------
// On Ready
// ------------------------------------

jQuery(document).ready(function($) {



	// Set Up The App
	Tasks.init();




});