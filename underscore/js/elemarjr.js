// http://elemarjr.net/2012/11/02/underscore-js/

function selectMapReduce() {

	var numbers = [1,2,3,4,5,6,7,8,9,10,11];

	var gt5 = _.select(numbers, function(n) {
		return n > 5
	})
	console.log(gt5)

	var squares = _.map(numbers, function(n) {
		return n * n
	})
	console.log(squares)

	var product = _.reduce(gt5, function(a,b) {
		return a * b
	},1);
	console.log(product)

}

function groupBy() {

	var numbers = [1,2,3,4,8];

	var q = _.countBy(numbers, function(n) {
		return n % 2 == 0
		// ou
		// return n % 2 == 0 ? 'even' : 'odd'
	})
	console.log(q)

}

$(function() {

	// selectMapReduce();
	groupBy();

});