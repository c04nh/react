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

const Greeting = function(props){
    const {name} = props
    return <h1>Hello, {name}</h1>
}

const Sum = function(props){
    const {x, y} = props
    return <h1>{x + y}</h1>
}

// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function({ name, age, gender, profile, highlight }) {
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const PersonProfileWithUserObject = function(props){
    return (
        <div className='person' style={props.highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={props.person.profile} />
            <p>name : {props.person.name}</p>
            <p>age : {props.person.age}</p>
            <p>gender : {props.person.gender}</p>
        </div>
    )
}

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

const {name: n2, gender, ...rest} = anotherPerson


ReactDOM.render(
    <div>
        {/* <ComponentWithProps value="Hello" />
        <ComponentWithProps value={1} />
        <ComponentWithProps value={{ a: 1, b: "React" }} />
        <ComponentWithProps value={() => { }} /> */}
        {/* <Greeting name="김미림" /> */}
        {/* <Sum x = {1} y = {2} /> */}
        {/* <PersonProfile name='John' age={35} gender='male'
    profile='https://randomuser.me/api/portraits/men/75.jpg' />
    <PersonProfile {...anotherPerson} highlight/> */}
    <PersonProfileWithUserObject person={anotherPerson} highlight/>
    </div>, document.getElementById('root'))