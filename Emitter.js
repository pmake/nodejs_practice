// 定義建構函數Emitter
function Emitter() {
    this.events = {}
}

// 於建構函數原型物件上增加on方法
Emitter.prototype.on = function(type, listener) {
    // 以想要的event type名稱做為物件屬性名稱，並設定為陣列，用來儲存listener
    // 如果已存在則延用，不存在則建立新的陣列供使用
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

// 增加emit方法
Emitter.prototype.emit = function(type) {
    // 確認觸發的event type是否已存在，若是則執行所有已存listener
    if(this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener(); 
		});
    }  
};


// 連結到module
module.exports = Emitter;