//http://klauslaube.com.br/2011/05/16/fazendo-javascript-oo-de-forma-facil.html

// Objetos e Namespaces
var fooBar = {
	init: function() {
		console.log("Inicializador");
	},
	_private: function(tipo) {
		console.log("Testando chamada " + tipo + ".");
	},
	eggs: function() {
		console.log("Eggs.");
		fooBar._private("interna");
	},
	spam: function(msg) {
		console.log("Spam: " + msg + ".");
	},
};

// Inicializador!
fooBar.init();

// Eggs. 
fooBar.eggs(); 

// Chamada Interna
fooBar._private("externa");

// Chamada Externa
fooBar.spam("Eggs and Spam");



// Classe
var Pessoa = function() {
	console.log("Pessoa istanciada!");
};

Pessoa();
console.log(typeof(Pessoa));

var pessoa1 = new Pessoa(); // Construtor
console.log(typeof(pessoa1))



// OOP - Objeto Literal
var Linguagem = function(nome , versao) {
	this.nome = nome;
	this.versao = versao;
};

Linguagem.prototype.descricaoCompleta = function(argument){
	 return this.nome + " vr. " + this.versao;
};

console.log(Linguagem.descricaoCompleta) // undefined

var python = new Linguagem("Python" , "2.7");
console.log(python);
console.log(python.descricaoCompleta()); // Depois de instanciada a classe, o método descricaoCompleta se torna acessível.



// OOP - Método de Classe
var Linguagem2 = function(nome , versao) {
	this.nome = nome;
	this.versao = versao;
	this.meuId = Linguagem2.incId();
}

// Adicionando uma propriedade através do Objeto Literal
Linguagem2.id = 0;

// Adicionando um método através do Objeto Literal
Linguagem2.incId = function() {
	this.id++;
	return this.id;
}

Linguagem2.descricaoCompleta = function(argument){
	 return this.nome + " vr. " + this.versao;
};

var javascript = new Linguagem2("Javascript" , "1.5")
console.log(javascript);
console.log(javascript.meuId);



// Herança
var Framework = function(nomeFramework, nome, versao) {
	this.nome = nome;
	this.versao = versao;
	this.nomeFramework = nomeFramework;
}

// Instancia de Linguagem na Classe Framework
Framework.prototype = new Linguagem2();

// Corrige o ponteiro do constructor para Framework (está apontando para Linguagem)
Framework.prototype.constructor = Framework;

// Adicionando métodos exclusivos da classe Framework
Framework.prototype.feitoEm = function() {
	return this.nomeFramework + " é feito em " + this.nome;
}

Framework.prototype.descricaoCompleta = function(argument){
	 return this.nome + " vr. " + this.versao;
};

var django = new Framework("Django", "Python", "2.7");
console.log(django);
console.log(django.descricaoCompleta());
console.log(django.feitoEm());

var jquery = new Framework("jQuery" , "Javascript" , "1.5");
console.log(jquery);
console.log(jquery.descricaoCompleta());
console.log(jquery.feitoEm());