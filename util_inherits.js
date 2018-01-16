// 引入原生module
const EventEmitter = require('events');
const util = require('util');

// 定義建構子函式
function Greetr(firstName = 'chris', lastName = 'chang') {
	// util.inherits將建構子的prototype物件串連起來，而下面這行讓此建構子在new 物件時
	// 新物件可以取得指定建構子的初始設定內容，也就是用this.xxx這種方式直接加在新物件上的內容
	// 只要使用call或apply呼叫指定的建構子，並將this傳入即可
	// 當new Greetr()，會建立一個新物件，並將Greetr中的this指向此新物件，就先叫它x物件
	// 用call呼叫EventEmitter並將this(代表x物件)傳入，call又會將EventEmitter中的this指向x物件
	// 因此call執行EventEmitter時，其中所有this.xxxx設定初始內容的動作都指向x物件
	// 讓x物件取得EventEmitter的所有初始內容
	// 至此才算是完整繼承了EventEmitter
	EventEmitter.call(this);
	
	this.firstName = firstName;
	this.lastName = lastName;
}


// 使用util的inherits方法將Greetr.prototype的__proto__指向EventEmitter.prototype
// 讓使用Greetr new出來的物件都能存取Greetr.prototype與EventEmitter.prototype上的屬性與方法
// 底層運作機制:
// Greetr.prototype = Object.create(EventEmitter.prototype, {options...})
// Object.create功用是建立一個新物件，並將新物件的__proto__指向第一個參數傳入的物件
// Greetr.prototype.__proto__ === EventEmitter.prototype 會是true
util.inherits(Greetr, EventEmitter);
console.log(Greetr.prototype.__proto__ === EventEmitter.prototype);

// 新增greet方法到Greetr.prototype上
// 注意此時如果不是用"."的方式新增方法，而是替換掉Greetr.prototype的內容
// 則上面util.inherits的效果就會被覆蓋
Greetr.prototype.greet = function(argument) {
	console.log('Hello ' + this.firstName + ' ' + argument);
	// 經過inherits，已可呼叫EventEmitter.prototype上的emit方法
	// 會經過prototype chain在EventEmitter.prototype上找到
	// emit的第二個參數會傳遞給event listener
	this.emit('greet', argument, 'test');
};

// new 一個greetr
const greetr = new Greetr();

// 使用EventEmitter.prototype上的on方法建立一個listener
greetr.on('greet', function(passInArgument) {
	console.log('greeting!' + ' ' + passInArgument);
	console.log(arguments);
});

// 使用Greetr.prototype上的greet上法
greetr.greet('傳遞吧!');

