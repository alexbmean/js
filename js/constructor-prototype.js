// Construtor

function Person(name , family) {
	this.name = name;
	this.family = family;
	this.getFull = function() {
		return this.name + " " + this.family;
	};
};

var person = new Person("Alex" , "Brasileiro");
console.log(person)
console.log(person.getFull())



// Protótipo

function Person2(name, family) {
    this.name = name;
    this.family = family;
}
Person2.prototype.getFull = function() {
    return this.name + " " + this.family;
};
var person2 = new Person2("Alex" , "Brasileiro");
console.log(person2)
console.log(person2.getFull())



// Hibrido

function Person3(name, family) {
	
	this.name = name;
	this.family = family;

	var records = [
		{
			type: "in", 
			amount: 0
		}
	];

	this.addTransaction = function(trans) {
		if( trans.hasOwnProperty("type") && trans.hasOwnProperty("amount") ) {
			records.push(trans);
		}
	};

	this.balance = function() {

		var total = 0;

		records.forEach(function(record){
			if(record.type === 'in') {
				total += record.amount;
			} else {
				total -= record.amount;
			}
		});

		return total;

	};

}

Person3.prototype.getFull = function() {
	return this.name + " " + this.family;
}

Person3.prototype.getProfile = function() {
	return this.getFull() + " , total balance: " + this.balance();
}

var person3 = new Person3("Alex" , "Brasileiro");
console.log(person3)

// Inserindo valores no método
person3.addTransaction({type: "in", amount: 35})
console.log(person3.getProfile());	
person3.addTransaction({type: "in", amount: 5})	
console.log(person3.getProfile());	
person3.addTransaction({type: "", amount: 20})	
console.log(person3.getProfile());	





