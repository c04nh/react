import React from "react"
import ReactDOM from 'react-dom'

function Child(props){
    return <div>{props.children}</div>
}

const Card = function(props) {
    return (
        <div style={{
            width: props.width, height: props.height,
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px"
        }}>
            {props.children}
        </div>
    )
}

const SlotMachine = function(props){
    const {s1, s2, s3} = props
    const allSame = s1 === s2 && s2 === s3
    const allSeven = allSame && s1 === "7"
    return (
        <div>
            <div>{s1} {s2} {s3}</div>
            {
                allSame && 
                <div style={allSeven ? {color: "red"}:null}>Congrats!</div>
            }
        </div>
    )
    // if(s1 == s2 && s2 == s3){
    //     return (<div>
    //         <p>{s1} {s2} {s3}</p>
    //         <p style={s1 == "7" ? {color: 'red'} : null}>축하합니다!</p>
    //     </div>)
    // }
    // return (<div>
    //     <p>{s1} {s2} {s3}</p>
    // </div>) 
}

ReactDOM.render(
    <div>
        {/* <Card>Hello</Card>
        <Card>
            <h1>Title</h1>
            <div>
                <ul>
                    <li>Item1</li>
                    <li>Item2</li>
                </ul>
            </div>
        </Card> */}
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
    </div>,
    document.getElementById('root')
)