// http://localhost:8888/99jobs-front-end/2-Labs/js/underscore/getting-cozy-with-underscorejs.html

function select() {

	// Formato Convencional
		var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42]
			, topScorers = []
			, scoreLimit = 90
			;

		for(i=0; i<=scores.length; i++) {

			if(scores[i]>scoreLimit) {
				topScorers.push(scores[i]);
			}

		}

		console.log(topScorers);

	// Underscore
		var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42]
			, topScorers = []
			, scoreLimit = 90
			;

		topScorers = _.select(scores, function(score) {
			return score > scoreLimit
		});

		console.log(topScorers);
			
}

function collections() {

	var Tuts = [
		{name: 'NetTuts', niche: 'Web Development'},
		{name: 'WPTuts', niche: 'WordPress'},
		{name: 'PSDTuts', niche: 'PhotoShop'},
		{name: 'AeTuts', niche: 'After Effects'}
	];

	var niches = _.pluck(Tuts, 'niche'); // _(Tuts).pluck('niche'); || Concatenação tipo jQuery
	console.log(niches);

	var names = _(Tuts)
					.pluck('name')
					.map(function(values) {
						return values + '+'
					});
	console.log(names);

	var Scores = [95, 82, 98, 78, 65];
	var hasPassed = _(Scores)
						.all(function(value) {
							return value > 50;
						});
	console.log(hasPassed);

}

function arrays() {

	var uniqTest = _.uniq([1,5,4,4,5,2,1,1,3,2,2,3,4,1]);
	console.log(uniqTest);

	var tens = _.range(0, 100, 10);
	console.log(tens);

	var tens = _.range(0, 100, 10)
		, eights = _.range(0, 100, 8)
		, fives = _.range(0, 100, 5)
		;

	var common = _.intersection(tens, eights, fives);	
	console.log(common);	

}

function objects() {

	var Tuts = { NetTuts : 'Web Development',  WPTuts : 'WordPress',  PSDTuts : 'PhotoShop', AeTuts : 'After Effects'};
	var keys = _.keys(Tuts)
		, values = _.values(Tuts);
	console.log(keys + values);

	var tuts = {NetTuts : 'Web Development'};
	var defaults = {NetTuts : 'Web Development' , niche: 'Education'};

	_.defaults(tuts, defaults)
	console.log(tuts)

}

function functions() {

	var o = { greeting: 'Howdy' }
		, f = function(name) {
			return this.greeting + " " + name;
		}
	var greet = _.bind(f, o);
	console.log( greet("Jess") );

}

function utilities() {

	var data =  {site: 'NetTuts'}, 
		template =   'Welcome! You are at <%= site %>';

	var parsedTemplate = _.template(template,  data );

	console.log(parsedTemplate);

}

$(function() {

	// select();
	// collections();
	// arrays();
	// objects();
	// functions();
	utilities();

});