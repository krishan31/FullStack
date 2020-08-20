import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const incvalue = () =>{
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={incvalue}>Count {count}</button>
        </div>
    )
}

export default HookCounter;
