Simple Model Loader
-------------------

Simple Model Loader, version 0.1.0a (c) 2012 Douglas Rossignolli
 
This is an extension for js-model developed by Ben Pickles (see dependencies) . 

Dependencies:
-------------

- Underscore (http://underscorejs.org/), 
- jQuery (http://www.jquery.com),
- JS-Model (http://benpickles.github.com/js-model/)

### Pipeline ###
<!-- language: lang-js -->  
	/* = require jquery  
  	*= require underscore  
  	*= require utils/model  
  	*= require app/models/YourModelJs  
  	*= require model_loader  
  	*= if you like, becouse I Love Sammy  
  	*= require utils/sammy */
 
Usage:
------
It's pretty simple to use the factory, you only will need to dipose a url and your Model JS

***Url*** need to have an json source e.g.:

<!-- language: lang-js -->
	[{name: "Doug", age: "25", weight:"100kg"}, {name: "Alex", age:"30", weight: "90kg"}]

<!-- language: lang-js -->
	$(function() {
		var loader = new ModelLoader();
		loader.load("/path/to/json", "Model");
		_.each(Model.all(), function(model) {
			console.log( model.attr("name") );
		});	
	});

<!-- language: lang-none -->
"Doug"
"Alex"