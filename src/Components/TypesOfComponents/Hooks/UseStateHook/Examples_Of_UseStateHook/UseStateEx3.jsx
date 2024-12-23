import { useState } from "react";

let UseStateEx3 = ()=>{
    // let [changeBackground, setChangeBackground] = useState(false)
    // return(
    //     <div>
    //         <button onClick={()=>{
    //             setChangeBackground(!changeBackground)
    //         }}>
    //             click
    //         </button>

    //         <h1 style={{backgroundColor: changeBackground ? "red" : "white"}}>
    //             Hello
    //         </h1>
    //     </div>
    // )

    let [circle, setCircle] = useState(false)
    return(
        <div>
            <div style={
                {
                    backgroundColor : circle ? "red" : "black",
                    height:100,
                    width:100,
                    borderRadius: circle ? 0 : 50}
                }
            ></div>
            <button onClick={()=>{
                setCircle(!circle)
            }}>click</button>
        </div>
    )
}
export default UseStateEx3