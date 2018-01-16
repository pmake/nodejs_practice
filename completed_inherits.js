const util = require('util');

// 父建構子
function Person() {
	// 初始化設定
	this.firstName = 'Chris';
	this.lastName = 'Chang';
}

// 在父建構子的prototype新增方法
Person.prototype.greet = function() {
	console.log(`Hello! ${ this.firstName } ${this.lastName}`);
}

// 子建構子
function Policeman() {
	// 使用new Policeman()建立的新物件能擁有Person的初始化設定
	Person.call(this);
	
	// 初始化設定
	this.fileId = '12345';
}

// 將子建構子的prototype屬性指向的物件的__proto__屬性指向父建構子的prototype屬性指向的物件
// 將prototype串連起來，讓Policeman的所有實例都能存取到Person的prototype上的內容
util.inherits(Policeman, Person);

// new一個新Policeman物件
const p1 = new Policeman();
// 如果Policeman建構子裡面未執行Person.call(this)，
// 則以下呼叫greet時firstName和lastName會是undefined
p1.greet();
