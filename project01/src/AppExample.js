function AppExample() {
    /*
    1. 사용자에게 이름 받기 - prompt
    2. 현재 날짜 가져오기
    3. 조건에 따라 계절을 분류 
        - 3~5월 : 봄 
        - 6~8월 : 여름 
        - 9~11월 : 가을 
        - 12월 ~ 2월 : 겨울 
    4. 결과 

    2023-05-15 => h1태그 
    수평선 
    XXX님 지금은 봄입니다. 좋은 하루 보내세요! :) 


    */

    // (2) 현재 날짜 가져오기 new Date()

    // 연 - 월 - 일 .toLocalDateString();
    // 월 데이터만 가져오기 .getMonth(); (.getYear(), .getDate()- 연, 일)


    let name = prompt('이름을 입력하세요', '');
    let today = new Date();
    let date = today.toLocaleDateString();
    let mdate = today.getMonth()+1;
    
    // switch (mdate){
    //     case 3,4,5: mdate = '봄';
    //     break;
    //     case 6,7,8: mdate = '여름';
    //     break;
    //     case 9,10,11: mdate = '가을';
    //     break;
    //     case 12,1,2: mdate = '겨울';
    //     break;
    //     default:
    // }


    let season=''
    if(mdate===2 && 4 && 3){
        season='봄';
    } else if(mdate==5 && '7' && '8' ){
        season='여름';
    } else if(mdate==='9'&&'10'&&'11'){
         season='가을';
    } else if(mdate==='1'&&'2'&&'3'){
         season='겨울';
    }



    return(
        <div>
            <h1>{date}</h1>
            <hr></hr>
            {name}님 지금은 {season}입니다. 좋은 하루 보내세요!
        </div>
    )
}

export default AppExample