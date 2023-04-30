// 1. 사용자로부터 키와 몸무게를 입력받는다.

let height = Number(prompt('키 입력'));
let weight = Number(prompt('몸무게 입력'));

//적정몸무게
let fit = (height-100)*0.9;
fit = Number(fit);

//몸무게 차이
let gap = weight - fit;
gap = gap.toFixed(2);   
//절대값 : Math.abs()
let def;

if (gap == 0) {
    def = '적정';
}else if (gap < 0){
    def = '미달';
}else {
    def = '초과';
}

document.write(`신장 : ${height} <br>
몸무게 : ${weight} <br>
적정 체중 : (${height}-100)X0.9 = ${fit}(kg) <br>
결과 : 적정 체중은 ${fit}이며, 현재 적정체중에서 ${gap}kg ${def}한 것을 알 수 있습니다.`)