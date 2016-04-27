// https://medium.com/@matheusml/entendendo-programa%C3%A7%C3%A3o-funcional-em-javascript-de-uma-vez-c676489be08b#.i59vbq7zq

console.log("======= Inputs e outputs BEM DEFINIDOS - Funções Puras =======")
console.log("")

	function square(x) {
		return x * x;
	}

	console.log(square(2))

console.log("")
console.log("======= Inputs e outputs NÃO DEFINIDOS - Funções Impuras =======")
console.log("")

	function generateDate() {
		
		try {
			var date = new Date()
			generate(date)

		} catch(e) {
			//
		}

	}

	if(!generateDate())
	console.log("ERROR")

console.log("")
console.log("======= Higher-Order Functions =======")
console.log("")

	var calculate = function(fn, x, y) {
		return fn(x, y);
	}

	// ES5

		var sum = function(x, y) {
			return x + y;
		}

		var mult = function(x, y) {
			return x * y
		}

		console.log(calculate(sum, 2, 5))
		console.log(calculate(mult, 2, 5))

	// ES6
	
		const sum2 = (x, y) => x + y;
		const mult2 = (x, y) => x * y;

		console.log(calculate(sum2, 2, 5))
		console.log(calculate(mult2, 2, 5))

console.log("")
console.log("======= MAP =======")
console.log("")

	// ES5

		var numbers = [1, 2, 3];

		var square = function(x) {
			return x * x;
		};

		var squaredNumbers = numbers.map(square)
		console.log(squaredNumbers)

	// ES6
	
		const numbers2 = [1, 2, 3];

		const square2 = x => x * x;

		const squaredNumbers2 = numbers2.map(square2)
		console.log(squaredNumbers2)

	// 	ES5

		var students = [
			{name: 'Anna', grade: 6},
			{name: 'John', grade: 4},
			{name: 'Maria', grade: 9}
		];

		var teachers = [
			{name: 'Mark' , salary: 2500},
			{name: 'Todd' , salary: 3700},
			{name: 'Angela' , salary: 1900}
		];

		var byName = function(object) {
			return object.name;
		}

		console.log(byName(students))

		var byNames = function(list) {
			return list.map(byName)
		}

		console.log(byNames(students))
		console.log(byNames(teachers))

	// 	ES6

		const students2 = [
			{name: 'Anna', grade: 6},
			{name: 'John', grade: 4},
			{name: 'Maria', grade: 9}
		];

		const teachers2 = [
			{name: 'Mark' , salary: 2500},
			{name: 'Todd' , salary: 3700},
			{name: 'Angela' , salary: 1900}
		];

		const byName2 = object => object.name;
		const byNames2 = list => list.map(byName2);
		console.log(byNames2(students2))
		console.log(byNames2(teachers2))

		// Podemos melhorar ainda mais esse trecho de código alterando as funções byName e byNames para que o atributo name não esteja mais tão acoplado. Podemos simplesmente receber como parâmetro qualquer atributo e aplicá-lo a função. Fica como exercício :)

		/* 
			RESOLVER O EXERCÍCIO
		*/


console.log("")
console.log("======= FILTER =======")
console.log("")

	// ES5 

		var numbers3 = [1, 4, 7, 10];

		var isBiggerThanFour = function(value) {
			return value > 4;
		}

		var numbersBiggerThanFour = numbers3.filter(isBiggerThanFour)
		console.log(numbersBiggerThanFour)

	// ES6
	
		const numbers4 = [1, 4, 7, 10];

		const isBiggerThanFour2 = value => value > 4;

		const numbersBiggerThanFour2 =  numbers4.filter(isBiggerThanFour2)
		console.log(numbersBiggerThanFour2)

		// Outro exercício é uma melhoria na função isBiggerThanFour, deveríamos alterá-la para receber como parâmetro qualquer inteiro que desejamos fazer a comparação.

		/* 
			RESOLVER O EXERCÍCIO
		*/

console.log("")
console.log("======= REDUCE =======")
console.log("")

	// ES5

		var numbers5 = [1, 2, 3];

		var sum = function(x, y) {
			return x + y;
		};

		var numbersSum = numbers5.reduce(sum, 0);
		console.log(numbersSum)

	// ES6
	
		const numbers6 = [1, 2, 3];

		const sum3 = (x, y) => x + y;

		const numbersSum2 = numbers6.reduce(sum3, 0);
		console.log(numbersSum2)

	// ES5
	
		var months = ['JAN', 'FEV', 'MAR', '/*...*/', 'DEZ'];

		var monthsShortner = function(prev, curr) {
			
			// return prev + '/' + curr; ERRADO
			
			if(prev === '') {
				return curr;
			} else {
				return prev + '/' + curr;
			}

		};

		var shortenerMonths = months.reduce(monthsShortner, '');
		console.log(shortenerMonths)

	// ES6
	
		const months2 = ['JAN', 'FEV', 'MAR', '/*...*/', 'DEZ'];

		const monthsShortner2 = (prev, curr) => {
			if(prev === '') {
				return curr;
			} else {
				return prev + '/' + curr;
			}
		}; 

		const shortenerMonths2 = months2.reduce(monthsShortner2, '');
		console.log(shortenerMonths2)

		// [UPDATE — 03/04/2016]
		// Verificar o comentário do Marcus Tenório para um algoritmo melhor

console.log("")
console.log("======= CURRYING =======")
console.log("")
	
	// Transformar isso: 
		
		var add = function(x, y) {
			return x + y;
		};

		console.log(add(1,2))

	// Nisso

		var add2 = function(x) {
			return function(y) {
				return x + y;
			};
		};
		console.log(add2(1)(2))

			// Reuso do código com currying

				var addFive = add2(5);
				var addTen = add2(10);
				console.log(addFive(3) , addTen(1))
				console.log(addFive(1) , addTen(10))

		//	OUTROS EXEMPLOS

		// ES5

			var greeting = function(greet) {
				return function(name) {
					return greet + ' ' + name;
				}
			}

			var hello = greeting('Hello');

			console.log(hello('World'))
			console.log(hello('Alex'))

		// ES6

			const greeting2 = greet => name => greet + ' ' + name;

			const hello2 = greeting2('Hello');
			console.log(hello2('World'))
			console.log(hello2('Alex'))

console.log("")
console.log("======= COMPOSE =======")
console.log("")

	// ES5

		var compose = function(f, g) {
			return function(x) {
				return f(g(x))
			}
		}

		var toUpperCase = function(x) {
			return x.toUpperCase();
		}

		var exclaim = function(x) {
			return x + '!';
		}

		var angry = compose(toUpperCase, exclaim)
		console.log(angry('ahhhhhh'));

	// ES6
	
		const compose2 = (f,g) => x => f(g(x));

		const toUpperCase2 = x => x.toUpperCase();

		const exclaim2 = x => x + '!';

		const angry2 = compose(toUpperCase2 , exclaim2);
		console.log(angry2('bhhhhhh'));












	


