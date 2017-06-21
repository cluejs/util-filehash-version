const fileHash = require('..');

console.time('simple test');
console.log(fileHash('test.txt'));
console.timeEnd('simple test');
