// ajax -> 비동기통신 방법
// j쿼리 접근$ - ajax메소드ajax()  - data:JSON형태{}

let moiveUrl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230501`;
const getAPI = () =>{
    $.ajax({
        //어느 데이터를 가져올 것인가
        url : moiveUrl,
        //어떤 방식으로 통신할 것인가 
        //(현재는 라이브 서버가 있으니 상관없음)
        type :'get',
        success : (response) => {
            // alert('통신 성공');

            //순위 - rank
            //영화제목 - movieNm
            //개봉일 - openDt

            let movieList = response.boxOfficeResult.dailyBoxOfficeList;
            console.log(movieList[0].movieNm);
            console.log(movieList[1].movieNm);
            console.log(movieList[2].movieNm);

            for (let i = 0; i<movieList.length; i++){
                console.log(movieList[i].rank, movieList[i].movieNm, movieList[i].openDt);
            }

            //테이블 출력 공간 container 에 
            //코드를 누적시킨다음
            //마지막에 넣어주는 방법

            let tableForm = `
            <table border="2px" bordercolor='black'>
                <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                </tr>
            `;
            for(let i of movieList){
            tableForm += `
                <tr>
                    <td>${i.rank}</td>
                    <td>${i.movieNm}</td>
                    <td>${i.openDt}</td>
            `;
            }
            tableForm += `
            </table>
            `;

            $('.container').html(tableForm);
            
        },
        error : () => {
            alert('통신 실패');
        }

    });
}