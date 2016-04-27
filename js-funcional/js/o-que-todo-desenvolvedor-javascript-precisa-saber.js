// https://medium.com/@matheusml/o-que-todo-desenvolvedor-javascript-precisa-saber-2cc33daedb86#.pcdmgitu1

console.log("======= CALL x APPLY =======")
console.log("")

	var mySelf = { firstName: "Alex" , lastname: "Brasileiro"};

	function showFullName() {
		console.log(this.firstName + ' ' + this.lastname);
	};

	showFullName.call(mySelf);
	showFullName.apply(mySelf);

	var mySelf2 = { age: 26};

	function isOlderThan() {
		for(var i=0; i<arguments.length; i++) {
			console.log(this.age < arguments[i])
		}
	}

	isOlderThan.call(mySelf2, 30, 40, 15);
	isOlderThan.apply(mySelf2, [30, 40, 15]);

console.log("")
console.log("======= CLOUSURES =======")
console.log("");

	(function() {
		var a = 1;
	})();

	var b = 2;

	// Outra Abordagem

		function init() {
			var name = "Alex";
			function hello() {
				console.log('Olá: ' + name);
			}
			hello();
		}

		init();

		try {
			hello();
		} catch(e) {
			console.log('%cERROR: ' + e , 'color: red');
		}

console.log("")
console.log("======= THIS =======")
console.log("")

	// Escopo Global

		console.log(this);

		function func() {
			return this;
		}

		console.log(func());

	// Método em um objeto
	
		var obj = {
			func: function() {
				return this;
			} 
		}

		console.log(obj.func());

			// Ou em objetos aninhados, o this se refere ao objeto pai mais próximo
			
				var father = {
					name: 'father',
					child: {
						name: 'child',
						func: function() {
							return this;
						}
					}
				}

				console.log(father.child.func())


			// Ou em LOOPS

				var obj2 = {
					name2: 'Alex',
					friends: ['João' , 'Maria'],
					loop: function() {
						this.friends.forEach(function(friend){
							console.log(this.name2 + 'knows' + friend);
						});
					}
				}

				try {
					console.log(obj2.loop())
				} catch(e) {
					console.log("ERROR: " + e);
				}

				//  Correção

					(function(){
						
						var self = this;

						var obj3 = {
							name: 'Alex',
							friends: ['João' , 'Maria'],
							loop: function() {
								this.friends.forEach(function(friend){
									console.log(self.name + 'knows ' + friend);
								});
							}
						}

						console.log(obj3.loop())
					
					})();


			// Função sem contexto

				var context = 'global';

				var obj4 = {
					context: 'object',
					method: function() {
						function func() {
							var context = "function";
							return this.context;
						};
						return func();
					}
				};

				console.log(obj4.method())


			// Função na Prototype Chain

				var obj5 = {
					func: function() {
						return this.name;
					}
				};

				var anotherObject = Object.create(obj5);
				anotherObject.name = 'Alex';
				console.log(anotherObject.func());


console.log("")
console.log("======= BIND =======")
console.log("")

	// Diferença entre o CALL e APPLY 

		var person = {
			name: "Alex",
			hello: function(thing) {
				console.log(this.name + " disse olá " + thing);
			}
		}

		person.hello.call(person, 'Mundo')

		var person2 = {
			name: 'Alex',
			hello: function(thing) {
				console.log(this.name + " disse olá " + thing);
			}
		}

		var hello = person2.hello.bind(person);
		hello("Mundo");

	// Disparo de eventos	

		try {
			element.addEventListener('click', this.onClick.bind(this));
		} catch(e) {
			//
		}


console.log("")
console.log("======= PROTOTYPE =======")
console.log("")

	var Animal = {
		walk: function() {
			console.log("I'm a walking...");
		}
	};

	var Dog = Object.create(Animal);

	Animal.walk();
	Dog.walk();

	var Airplane = {
		fly: function() {
			console.log("i'm flying...");
		}
	}

	try {
		Airplane.walk();
	} catch(e) {
		console.log('%cERROR: ' + e , 'color: red');
	}


console.log("")
console.log("======= HOISTING =======")
console.log("")

	var n = 1;

	function init() {
		console.log(n);
		var n = 2;
	}

	init();

