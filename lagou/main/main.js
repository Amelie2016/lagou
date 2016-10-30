require.config({
	shim : {
	    "angular" : {
	    	exports : "angular"
	    },
	    "angularRoute" : {
	    	deps: ['angular'],
	    	exports : "angular-route"
	    }
	},
	paths : {
		"text" : "../lib/require/text",
		"css": "../lib/require/css",
		"angular" : "../lib/angular/angular.min",
		"angularRoute" : "../lib/angular/angular-route.min",
		"app" : "app",
		"mainRoute" : "mainRoute"
	}
})
require(["mainRoute"],function () {
    
})