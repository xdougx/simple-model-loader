 /* Simple Model Loader, version 0.1.0a 
  * (c) 2012 Douglas Rossignolli
 	*
 	* Released under MIT license.
 	*
	* This object is an extension for js-model developed by Ben Pickles (see dependencies) . 
	*
  * Dependencies: 
  *		- Underscore (http://underscorejs.org/), 
  *		- jQuery (http://www.jquery.com),
  *		- JS-Model (http://benpickles.github.com/js-model/)
	*
  */
var ModelLoader = function(){
	// the load function call the load data and produce all objects to the specified model
	this.load = function(url, klass){
		var json = this.load_data(url, klass);
		this.modelFactory(json, klass);
	};

	// receive a json data and the Model Constant class, create all objects and add to the specified model
	this.modelFactory = function(json, klass){
		var constant = window[klass];
		var instance = null;

		// iterate each element
		_.each(json, function(e){
			instance = new constant(e);
			constant.add(instance);
		});


	};

	// load the json from an url, return an parsed json
	this.load_data = function(url){
		try {
			var loaded_content = $.ajax({
		  		url: url,
					type: 'GET',
					dataType: 'json',
		  		async: false
		 		}).responseText;

			return jQuery.parseJSON(loaded_content);
		}catch(e){
			
			alert("deu erro :D")
		}
 		
	};
};




