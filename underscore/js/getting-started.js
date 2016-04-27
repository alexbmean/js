// http://www.sitepoint.com/getting-started-with-underscore-js/

function each() {

	var artists = [
		'Pharrel Williams', 
		'Led Zeppelin', 
		'Rolling Stones'
	]

	// Normal
	
	for(var i=0; i<artists.length; i++) {
		console.log('N artist: ' + artists[i]);
	}

	// Underscore

	_.each(artists, function(artist, index, artists) {
		console.log('_U artist: ' + artist)
		console.log('_U index: ' + index)
		console.log('_U artists: ' + artists)
	});

}

function template() {

	var artists = ['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones']
		, artistTemplate = _.template('<li><%= artist %></li>')
		, content = ''
		;

	_.each(artists, function(artist, index, artists){
		content += artistTemplate({
			artist: artist
		});
	});

	$('ol').append(content)

}

function filter() {

	var artists = ['Led Zeppelin', 'ACDC', 'Rolling Stones'], 
		artistTemplate = _.template(
			'<% _.each(artists, function(artist, index, artists) { %>' +
			'<li><%= artist %></li>' +
			'<% }); %>'
		),
		content = artistTemplate({
			artists: _.filter(artists, function(artist, index, artists) {
				return artist === 'ACDC' || artist === 'Rolling Stones';
				// return artist === 'ACDC';
			})
		});

	$('ol').append(content)

}

function map() {

	var array = [2,4,6]
		newArray = []

	_.map(array, function(v) {
		newArray.push(v*2)
	});

	console.log(newArray)

}

function times() {

	_(5).times(function(n) {
		console.log(n)
	});

}

$(function() {

	// Basics

	/*

		console.log(_.isEmpty({}))

		var flatten = _.flatten([[0,1], [2,3], [4,5]]);
		console.log(flatten);

		var range = _.range(5);
		console.log(range);

		var template = _.template( '<p><%= text %></p>' , {text: '99jobs'} );
		console.log(template)

	*/

	// Functions
	
		// each();
		// template();
		// filter();
		// map();
		times();

})
