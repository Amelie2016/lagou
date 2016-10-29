require({
	shim : {
	
	},
	baseUrl : "../lib/",
	paths : {
		"text" : "require/text",
		"css": "require/css",
		"angular" : "/angular/angular.min",
		"angular_"
	}
})
require(["main/mainController"],function () {
})