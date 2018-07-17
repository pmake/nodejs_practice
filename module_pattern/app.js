const p1 = require('./Person');

const p2 = require('./Person');

// 對相同路徑的多次require會傳回第1次的cache，所以下列比較會是true
console.log(p1 === p2);

// 即使在不同檔案require相同路徑，經由起始檔案串連後仍是在同一個起始環境底下，而cache的scope是在起始環境
// 所以以下比較也都是true，不用擔心重複建立相同內容的問題

const sp1 = require('./p1');
const sp2 = require('./p2');

console.log(sp1 === sp2);
console.log(sp1 === p1);

// 如果想要傳回不同的物件，則一開始透過module.exports傳回的該是建構函數本身，而不是new出來的物件
// 然用後建構函數去new新物件即可

const Person1 = require('./Person1');

const np1 = new Person1('Chris', 'Chang');
const np2 = new Person1('Chris', 'Chang');
// 以下會是false
console.log(np1 === np2);