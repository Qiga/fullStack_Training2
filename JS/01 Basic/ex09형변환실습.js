//값이 '100'과 200인 num1 num2를 생성
// 100과 200의 합은 >> 300 의 형태로 출력하라


let num1 = '100';
let num2 = 200;

let sum = parseInt(num1) + num2;
// Number 변수를 활용하는 방법
let sumNUm = Number(num1) + num2; 

console.log(num1 + '과' + num2 +'의 합 >> ' + sum + '입니다.');

//템플릿 리터럴 => 백틱 ` dmf tkdyd
// ``안에 있는 ${변수명}은 변수로 인지함
// ``안에서는 개행을 자동으로 인지함

console.log(`${num1}과 ${num2}의 합 >>
 ${sum}입니다.`);

