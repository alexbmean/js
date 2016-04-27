var a = 5;
function f() { 
	return a; 
}
console.log(f())



// Alterando o escopo global
var b = 5;
function g() {
	b = 10;
	return b;
}
console.log(g())



// Variáveis Publicas e Privadas
var f = function() {
	var a = 10;
	this.b = 5;
}
var myfunc = new f();
console.log(myfunc.a); // is undefined because a is private
console.log(myfunc.b); // equals to 5 because b is public



// Classes com Métodos Púbicos e Privados
	
	// Criando Classes em JS
	var myClass = function() {
		
		var f = function() {

			return 10;

		}

	}

	// Métodos Públicos e Privados
	var myClass2 = function() {

		// método público
		this.a = function() {

			return 10;

		}

		// método privado
		var b = function() {

			return 5;

		}

	}

	var c = new myClass2();
	console.log(c.a())
	// console.log(c.b()) // undefined


	// Acessando Métodos Privados com Métodos Públicos
	var myClass3 = function() {

		// método público
		this.a = function() {
			return b();
		}

		// método privado
		var b = function() {
			return 7;
		}

	}
	var d = new myClass3();
	console.log(d.a())
	// console.log(d.b()) // undefined


	// Acessando Métodos Públicos através de Métodos Privados
	var myClass4 = function() {

		var self = this;

		// método público
		this.a = function() {
			return 10;
		}

		// método privado
		var b = function() {
			return self.a();
		}

	}

	var e = new myClass4();
	console.log(e.a())
	console.log(e.b())