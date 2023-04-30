//연산자

// JS에서 /는 몫이 아닌 실제 나누는 값이 나옴
//  == 는 동등연산자 ( 자동으로 자료형을 변환하여 비교 )
// === 는 일치연산자 ( 값과 자료형이 같은지를 비교 )

console.log(100+3);
console.log(100-3);
console.log(100/3);
console.log(100*3);
console.log(100%3);

let val1 = 10; 
let val2 = '10';

console.log(val1==val2);
console.log(val1===val2);
console.log(val1!==val2);
console.log(val1===Number(val2));