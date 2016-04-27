// http://waldyrfelix.net/2012/12/20/underscore-js-um-framework-javascript-para-programacao-funcional/

function mapReduce() {

	var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	var pimlist = _.map(list, function(val) {
		return val % 3 == 0 ? "pim" : val.toString();
	});
	console.log(pimlist)

	var reducedVal = _.reduce(list, function(memo, val) {
		return Math.pow(val, 2) + memo;
	}, 0);
	console.log(reducedVal)

}

function filterWhere() {

	var list = [
		{foo: 123, bar: 'ddd'},
		{foo: 234, bar: 'ccc'},
		{foo: 345, bar: 'aaa'},
		{foo: 564, bar: 'hhh'},
		{foo: 123, bar: 'aaa'}
	];

	var result = _.where(list, {bar: 'aaa'});
	console.log(result);

	var list2 = [12,24,53,35,51,49,32];

	var filtered = _.filter(list2, function(val) {
		return val < 30;
	});
	console.log(filtered)

}


$(function() {

	// mapReduce();
	filterWhere();

});