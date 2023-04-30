//자료형 변환

let num = '3.14';

//1. 문자 > 실수 : parseFloat()

console.log(parseFloat(num));
// 콘솔창에서 문자는 검은색, 숫자는 파란색으로 출력됨


//2. 문자 > 정수 : parseInt()
console.log(parseInt(num));
//결과 : 3


//3. 문자 > 숫자 : Number()
let num2 = '5';
console.log(Number(num));
console.log(Number(num2));


//4. 숫자 > 문자 : String(data), data.toString()


let num3 = 100; 
console.log(num3);
console.log(String(num3));