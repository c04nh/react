import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const ClickCame = function(props) {
    const [timerState, setTimerState] = useState({
        time: props.time,
        timeout: false
    })
    const [clickCount, setClickCount] = useState(0)

    useEffect(() => {
        console.log('setInterval');
        const id = setInterval(() => {
            setTimerState(prevState => {
                console.log('from setInterval', id)
                if( prevState.time === 1 ) {
                    console.log('clearInterval (by timeout)')
                    clearInterval(id)
                    return { ...prevState, timeout: true, time: prevState.time - 1}
                } else {
                    return { ...prevState, time: prevState.time - 1 }
                }
            })
        }, 1000)
        return () => {
            console.log('clearInterval (by unmount)', id)
            clearInterval(id)
        }
    }, [])

    return (
        <div>
            {timerState.timeout ? <h2>timeout</h2> : <h2>{timerState.time}</h2>}
            <h2>{clickCount}</h2>
            <button onClick={() => setClickCount(timerState.timeout ? prev => prev + 0 : prev => prev + 1)}>클릭</button>
        </div>
        
    )
}

ReactDOM.render(<ClickCame time={15} />, document.getElementById("root"))