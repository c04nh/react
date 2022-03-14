import React from 'react'
import ReactDOM from 'react-dom'

const add = (x, y) => {
    return x + y;
}

const double = x => 2 * x;

const sayHello = () => console.log('Hello');

// 함수 선언식을 통해서 컴포넌트 정의 가능
function Cat() {
    return <div>🐱</div>
}

// 함수 표현식을 통해서 컴포넌트 정의 가능
const Dog = function() {
    return <div>🐶</div>
}

// 화살표 함수로 컴포넌트 정의 가능
const Pig = () => <div>🐷</div>

// function AnimalContainer() {
//     return (
//         /* 일반적인 태그 사용 가능 */
//         <div style={{fontSize: "100px"}}>
//             {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
//             <Cat />
//             <Dog />
//             <Pig />
//         </div>
//     )
// }

ReactDOM.render(
    <React.Fragment>
        <Cat />
        <Dog />
        <Pig />
    </React.Fragment>
    , document.getElementById("root"))
