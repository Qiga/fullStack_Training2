
//좋아요를 클릭할 시 좋아요 -> 좋아요 취소
// 0 -> 1 

$(document).on('click', '.likeBtn', (e)=>{
    $(e.target).text('좋아요 취소 💢');
    $('span').text('1');
    //클래스 제거와 클래스 추가
    // $(e.target).removeClass('likeBtn');
    //클래스라는 속성을 제거하는
    $(e.target).removeAttr('class');
    $(e.target).attr('class', 'dislikeBtn');
});

//좋아요 취소 클릭 시 
// 좋아요 취소 -> 좋아요 ,  1 -> 0
$(document).on('click', '.dislikeBtn', (e) => {
    $(e.target).text('좋아요');
    $('span').text('0');
    //dislikeBtn 클래스 제거, likeBtn 클래스 추가
    $(e.target).removeAttr('class');
    $(e.target).attr('class', 'likeBtn')
});


//댓글 작성 버튼 클릭 시 

// 댓글 + 삭제 버튼 생성

//$(A).prepend(B) : B를 A요소 처음 위치에 추가 하는 메소드
//$(A).append(B) : B를 A요소 마지막 위치에 추가 하는 메소드

$(document).on('click', '.textBtn', ()=>{
    let textVal = $('input[type=text]').val();
    $('.container').prepend(`
    <p>
        ${textVal}
        <button class="removeBtn">삭제</button>
    </p>
    `)
    // input 안의 값 비워주기
    //.val('변경할 값') : 값에 접근 ''는 공백을 의미
    $('input').val('');
});

//삭제 버튼 클릭 시 
//  댓글 + 삭제 버튼 제거 

$(document).on('click','button[class = removeBtn]', e=>{
    
    //부모관련 메서드
    //parent : 가장 가까운 부모요소에 접근
    //parents : 모든 부모요소에 접근
    // $(e.target).parents.remove();

    //closest(원하는 요소) : 모든 부모요소를 대상으로 원하는 대상요소 접근 가능 
    $(e.target).closest('p').remove();
})
