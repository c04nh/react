import React, {useState} from "react"
import ReactDOM from 'react-dom'

function Counter(props){
    const [count, setCount] = useState(0)
    const [text, setText] = useState("a")
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>증가</button>
            <h1>{text}</h1>
            <button onClick={() => setCount(asdf => asdf + 1)}>감소</button>
        </div>
    )
}

const UserProfile = function(props){
    const [userName, setUserName] = useState("아무개")
    const [userAge, setUserAge] = useState(0)
    const [emailAddress, setEmailAddress] = useState(null)

    return <div>{userName} {userAge} {emailAddress}</div>
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
)