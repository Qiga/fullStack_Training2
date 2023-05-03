//이동하기 클릭시
//박스들이 계단 형태로 이동
// marginLeft
let blueVal = document.getElementById("blueBox");
let redVal = document.getElementById("redBox");
let greenVal = document.getElementById("greenBox");
let grayVal = document.getElementById("grayBox");

const marginFunc = ()=>{
    // 왼쪽에 여백을 만들어서 이동한 것 처럼 표시
    blueVal.style.marginLeft = '100px';
    greenVal.style.marginLeft = '200px';
    grayVal.style.marginLeft = '300px';
};

//둥글게 클릭시
//오른쪽 위, 왼쪽 아래 모서리 둥글게
// border(방향)Radius

const radiusFunc = ()=>{
    let divList = document.querySelectorAll('div');
    

    //for문을 활용하는 3가지 방법
    for(let i of divList){
        i.style.borderTopRightRadius = '50%';
    }

    //for문 활용 2번
    // for (i = 0; i<divList.length; i++){
    //     divList[i].style.borderTopRightRadius = '50%';
    //     divList[i].style.borderBottomLeftRadius = '50%';
    // }

    //for문 활용 3번
    //forEach문은 일부 유사배열에서 사용할 수 없음 
    //=> querySelectorAll은 return 타입이 NodeList로 getElements랑은 다르며 forEach를 사용가능하다.
    divList.forEach(element => {
        element.style.borderBottomLeftRadius = '50%';
    });



    // blueVal.style.borderTopRightRadius = '50%';
    // blueVal.style.borderBottomLeftRadius = '50%';

    // redVal.style.borderTopRightRadius = '50%';
    // redVal.style.borderBottomLeftRadius = '50%';

    // greenVal.style.borderTopRightRadius = '50%';
    // greenVal.style.borderBottomLeftRadius = '50%';

    // grayVal.style.borderTopRightRadius = '50%';
    // grayVal.style.borderBottomLeftRadius = '50%';

};
