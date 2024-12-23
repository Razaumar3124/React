import { useState } from "react"

let UseStateEx1 = ()=>{
    // let a = useState()
    // let [x, y] = a
    // console.log(x);             //undefined
    // console.log(y);             //function


    // let myUseState = (a)=>{                 ---->|
    //     let setMyState = (a)=>{                  |
    //         //? modify current state             |
    //     }                                        |
    //     return [a,setMyState]                    |-------> Internal working of useState method
    // }                                            |
    // let [state, setState] = myUseState(0)        |
    // console.log(myUseState());                   |
    // console.log(state);                     ---->|
    
    
    // let [state, setState] = useState(0)
    // return (
    //     <div>
    //         <h1>UseStateEx1</h1>
    //         <h1>Count : {state}</h1>
    //         <button onClick={()=>{setState(state+1)}}>Increment</button>
    //     </div>
    // )

}
export default UseStateEx1

