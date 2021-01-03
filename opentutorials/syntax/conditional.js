//process.argv index 0,1은 각각 실행파일(node.exe)과 프로세스(process.js)
var args = process.argv;

console.log(args[2]);
console.log('A');
console.log('B');
if (args[2] === '1') {
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');
