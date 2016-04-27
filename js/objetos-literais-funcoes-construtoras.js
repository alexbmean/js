// http://tableless.com.br/javascript-objetos-literais-vs-funcoes-construtoras/

// Objetos Literais | Todos os Métodos e Propriedades são públicas
var tableless = {
	init: function(artigos) {
		this.artigos = artigos;
	}
};

var tableless2 = tableless;



// Objeto Literal definindo namespace
var tableless3 = tableless3 || {};

tableless3.Artigo = function(titulo) {
	
	this.titulo = titulo;

};

var artigo = tableless3.Artigo('Mais um artigo sobre JavaScript');



// Construtores | Pode ser usada como uma função ou instanciar um objeto utizando new
function Categoria(nome) {
	this.nome = nome;
}
var categoria = new Categoria("Alex")
console.log(categoria)



// Métodos e Propriedades Privadas com funções construtoras
function Categoria2(nome) {

	var totalProdutos = 0,
		self = this,
		atualizaTotalProdutos = function() {
			self.totalProdutos += 1;
		};
	this.nome = nome;	
	atualizaTotalProdutos();
	
}
