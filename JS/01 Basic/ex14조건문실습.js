//사용자가 입력한 색깔에 따라서 배경 변화시키기
// ~document.getElementById ~~~

let choiceColor = prompt('원하는 배경색을 고르세요');

let colorName; 

if(choiceColor === '초록'){
    colorName = 'green';
} else if (choiceColor === '빨강'){
    colorName = 'red';
} else if (choiceColor === '노랑'){
    colorName = 'yellow';
} else {
    alert('잘못입력하셨습니다');
}

document.querySelector('body').style.backgroundColor = colorName;
