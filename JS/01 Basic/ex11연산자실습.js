// 사용자로부터 숫자를 입력받기
// 입력받은 숫자로 연산하여 결과값얻기 (백의 자리 이하는 버림)

// num을 받고 백의자리 이하는 버려서 
// 백의 자리 이하 버린 결과 >> 000 의 형태로 출력하라

let inputNum = Number(prompt('숫자를 입력하세요'));
let resultNum = inputNum - inputNum%100;

console.log(`백의 자리 이하 버린 결과 >> ${resultNum}`);