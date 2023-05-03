 //span 요소 가져오기
 let getSpan = document.getElementById("spanTag");
 console.log(getSpan);
 let getSapn2 = document.getElementsByTagName('span');
 console.log(getSapn2[0]);

 //querySelector 활용하여 요소 가져오기
 //css선택자로 요소 검색
  //태그 선택자로 가져오기 
 let selSpan1 = document.querySelector('span');
 console.log(selSpan1);
  //아이디 선택자로 가져오기
 let selSpan2 = document.querySelector('#spanTag');
 console.log(selSpan2);

 //querySelectorAll : css선택자로 모든 요소 검색


 //DOM style 제어 
 //요소.style속성.속성 = 값

 const clickFunc = () => {
     //글자크기 25 색상 tomato 굵기 900
     getSapn2[0].style.fontSize = '25px';
     getSpan.style.color = 'tomato';
     selSpan1.style.fontWeight = '900';
 }