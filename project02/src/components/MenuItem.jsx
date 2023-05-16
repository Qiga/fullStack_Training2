const MenuIteme = ({name, price, menuN})=>{

    /*
    상위 컴포넌트에서 보낸 값을 하위 컴포넌트에서 받는 방법
    함수의 형태이기 때문에, 값을 매개변수를 통해서 받는다

    case 1 : props로 받아서 props.name 으로 입력하기
    
    case 2 : {name} 으로 받아와서 => name 으로 입력하기 (객체 비구조화 할당 기법)
    
    객체 비구조화 할당 : 객체 안의 속성만 꺼내서 마치 변수인 것 처럼 사용이 가능함
    (주의 : 매개변수로 받는 값이 아니기에 반드시 이름이 같아야함 (변수취급이기 때문))
    ex ) let props = {name : AA, gender : BB}
     => let {name, gender} = {name : AA, gender : BB}
        <p> name <p>
        결과 : AA
    */

    //rafce + Enter
    // React arrow function component 

    return (
        <div className="item-border">
            <p> {name} </p>
            <p> {price} </p>
            <h3> {menuN} </h3>
        </div>
    )

}

export default MenuIteme; 