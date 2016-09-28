(function(win, doc, $, undefined) {
    'use strict';
    
    // Don't run if jQuery isn't loaded
    if (typeof window.jQuery === 'undefined') {
      return;
    }
    
    // Our code will go here.
    var data, fillForm, FormData, len, _rand;

    FormData =function(name){
    	this.name = name;
    };

     /*==========  FILL IN THE FORM  ==========*/

  	fillForm = function() {
  		data = new FormData("Anh");

  		$("input[name=lastname]").val("Anh");
  	};
  
  }(window, window.document, window.jQuery));
