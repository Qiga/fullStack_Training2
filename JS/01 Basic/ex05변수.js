//변수 : 데이터를 담을 공간


// 기존 변수 선언 키워드 : var
//Js의 경우 저장하는 데이터에 따라서 자료형을 결정해줌

//ES6 : let(변수) const(상수)

let num = 3 ;

// 1. var (재선언, 재할당 가능)

//재선언 : 같은 변수 이름으로 다시 변수 선언(키워드 o)
var var1 = 1; 
console.log('var1 최초 선언', var1);
var var1 = 2;
console.log('var1 다시 선언', var1);

//재할당 : 선언된 변수에 다시 값을 할당 
var1 = 3;
console.log('var1 값 업데이트', var1);


// 2. let (재선언 불가능, 재할당 가능)
let let1 = 1;
console.log('let1 최초 선언', let1);
// let let1 = 2; 재선언이 불가능함

let1 = 2;
console.log('let1 재할당', let1);

// 3. const (재선언, 재할당 불가능)

const con1 = 1;
console.log('con1 최초 선언', con1);

//주의 사항

/* 변수의 첫 글자로는 $,_, 문자만 올 수 있다
예약어는 변수명으로 사용할 수 없다
변수이름은 의미를 부여해 작성하는 것이 좋다 */
