import React from 'react'
import ReactDOM from 'react-dom'

function FirstComponent(){
    return <div>First component</div>
}

function HelloWorld(){
    return <h1>Hello, Wolrd!</h1>
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'))
