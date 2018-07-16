// require function會把json轉成js 物件
var greetings = require('./greetings.json');

var greet = function() {
    console.log(greetings.en);
};


module.exports = greet;