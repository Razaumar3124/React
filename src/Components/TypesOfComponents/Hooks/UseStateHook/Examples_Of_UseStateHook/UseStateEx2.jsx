import { useState } from "react"

let UseStateEx2 = ()=>{
    // let [state, setState] = useState(0)
    // return (
    //     <div>
    //         <div>Count : {state}</div>

    //         <button onClick={()=>{
    //             setState(state+1)
    //         }}>Increment</button>

    //         <button onClick={()=>{
    //             setState(state-1)
    //         }}>Decrement</button>

    //         <button onClick={()=>{
    //             setState(0)
    //         }}>Reset</button>
    //     </div>
    // )

    let [count, setCount] = useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
            setCount(count+10)
            setCount((pre)=>pre+20)
            setCount((pre)=>pre+30)
            }}>
                Increment
            </button>
        </div>
    )
}
export default UseStateEx2