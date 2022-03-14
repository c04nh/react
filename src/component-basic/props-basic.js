import React from 'react'
import ReactDOM from 'react-dom'

const arr = [100, 200];
const [v1, v2] = arr;
// const v1 = arr[0];
// const v2 = arr[1];
const [v3] = arr;

const user = {name: "John", age: 20}
// const {name, age} = user;
// const name = user.name;
// const age = user.age;

const name = "Hello";
const {name: n, age} = user;

function f({name, age}){
    console.log(name, age)
}

function f2(user){
    const name = user.name;
    const age = user.age;
    console.log(name, age);
}

f(user);

// const a = () => {};
// let b = a;
// function func(f){
//     f();
// }
// func(a);

const ComponentWithProps = function(props){
    console.log(props)
    const {value1, value2, whatever} = props
    return <p>{value1} {value2} {whatever}</p>
}

ReactDOM.render(
    <div>
        <ComponentWithProps value="Hello" />
        <ComponentWithProps value={1} />
        <ComponentWithProps value={{ a: 1, b: "React" }} />
        <ComponentWithProps value={() => { }} />
    </div>, document.getElementById('root'))