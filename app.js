// 引入自訂module需使用路徑，若引用原生module則不用路徑
// require函式內容會判斷當傳入的內容無路徑時會查找原生module list
const Emitter = require('./Emitter');

// new 一個新emitter物件
const emitter = new Emitter();

// 設定listener
emitter.on('click', function() {
	console.log('clicked listener1')
});

emitter.on('click', function() {
	console.log('clicked listener2')
});

emitter.on('click', function() {
	console.log('clicked listener3')
});


// 驗證順序
console.log('is this first?')

// 模擬事件發生

emitter.emit('click');