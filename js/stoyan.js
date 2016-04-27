// função
function Apple(type) {
	this.type = type;
	this.color = 'red';
	this.getInfo = getAppleInfo;
};

// anti-padrão
function getAppleInfo() {
	return this.color + ' ' + this.type + ' apple';
};

// estanciando o objeto
var apple = new Apple('macintosh')
apple.color = 'reddish';
console.log(apple.getInfo())



// Definindo o método dentro do construtor
function Apple2(type) {
	this.type = type;
	this.color = "red";
	this.getInfo = function() {
		return this.color + ' ' + this.type + ' apple';
	}
};

// estanciando o objeto acima
var apple2 = new Apple2("microsoft");
console.log(apple2.getInfo())



// Adicinando o método ao prototype
function Apple3(type) {
	this.type = type;
	this.color = 'red';
};

Apple3.prototype.getInfo = function() {
	return this.color + ' ' + this.type + ' apple';
};

var apple3 = new Apple3("iphone");
console.log(apple3.getInfo())



// Usando objeto literal - Não é necessário estanciar nenhuma classe | Singleton
var apple4 = {
	type: 'samsung',
	color: 'yellow',
	getInfo: function() {
		return this.color + ' ' + this.type + ' apple';
	}
}
apple4.color = "blue";
console.log(apple4.getInfo())



// Singleton como função
var apple5 = new function() {
	this.type = 'ps3';
	this.color = 'white';
	this.getInfo = function() {
		return this.color + ' ' + this.type + ' apple';
	}
}
apple5.color = "black";
console.log(apple5.getInfo());


