var args = process.argv;
// args[2] 부터 콘솔에 입력한 유효 값
console.log(args[2]);
console.log('A');
console.log('B');
if (args[2] === '1') {
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');


// node syntax/conditional.js 1
// 1
// A
// B
// C1
// D