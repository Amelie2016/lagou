require.config({
	paths:{
		"text" : "lib/text",
		"css" : "lib/css",
		"jquery" : "lib/jquery",
		"underscore" : "lib/underscore",
		"backbone" : "lib/backbone",
	}
})

require(["backbone","route"],function(){
	Backbone.history.start();
	location.hash = "home"
})