// http://www.getfaster.com.br/posts/underscore-js%E2%80%93biblioteca-leve-e-muito-util/

function colecoes() {

	var numeros = [4, 1, 7, 2, 10];
	var pessoas = [{Nome: 'Cleber',Idade: 26},{Nome: 'Alex',Idade: 16},{Nome: 'Augusto',Idade: 30}];

	var maiorNumero = _.max(numeros);
	console.log(maiorNumero);

	var menorNumero = _.min(numeros);
	console.log(menorNumero);

	var pessoaMaisVelha = _.max(pessoas, function(p) {
		return p.Idade;
	});
	console.log(pessoaMaisVelha);

	var count = _.size(pessoas);
	console.log(count);

	var numerosEmbaralhados = _.shuffle(numeros);
	console.log(numerosEmbaralhados);

	var eu = _.where(pessoas, {Nome: 'Alex'});
	console.log(eu);

	var primeiroMaiorDe18 = _.find(pessoas, function(p) {
		return p.Idade > 18;
	});
	console.log(primeiroMaiorDe18);

	var todosMaioresDe18 = _.filter(pessoas, function(p) {
		return p.Idade > 18;
	});
	console.log(todosMaioresDe18);

	var idade = _.pluck(pessoas, 'Idade');
	console.log(idade);

	var nomes = _.pluck(pessoas, 'Nome');
	console.log(nomes);

	var novalista = _.map(numeros, function(n) {
		return n * 2
	});
	console.log(novalista);

}

function arrays() {

	var numeros = [4, 1, 7, 2, 10, 2];

	var range = _.range(10);
	console.log(range);

	var range2 = _.range(1, 11);
	console.log(range2);

	var indice = _.indexOf(numeros, 2);
	console.log(indice);

	var indice2 = _.lastIndexOf(numeros, 2);
	console.log(indice2);

	var diferenca = _.difference(numeros, [2, 7, 15, 3]);
	console.log(diferenca);

	var interseccao = _.intersection(numeros, [2, 7, 15, 3])
	console.log(interseccao);

	var union = _.union(numeros, [2, 7, 14, 3]);
	console.log(union);

	var primeiro = _.first(numeros);
	console.log(primeiro);

	var primeiros = _.first(numeros , 3);
	console.log(primeiros);

	var ultimo = _.last(numeros);
	console.log(ultimo);

	var ultimos = _.last(numeros, 2);
	console.log(ultimos);

}

function objects() {

	var pessoas = {Nome: 'Cleber', Idade: 26}

	var keys = _.keys(pessoas);
	console.log(keys);

	var values = _.values(pessoas);
	console.log(values);

	var objSomenteComNome = _.pick(pessoas, 'Nome');
	console.log(objSomenteComNome);

	var objSemNome = _.omit(pessoas, 'Nome');
	console.log(objSemNome);

}

function utilities() {

	_.times(2, function(n) {
		console.log(n + ' bla');
	});

	var random = _.random(1 , 100);
	console.log(random);

	var sentenca = _.escape("Web, ect & tal");
	console.log(sentenca);

	var sentenca2 = _.unescape("Web, ect &amp; tal");
	console.log(sentenca2);

}

$(function() {

	// colecoes();
	// arrays();
	// objects();
	utilities();

});