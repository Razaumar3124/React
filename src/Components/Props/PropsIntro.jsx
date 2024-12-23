import { useState } from "react"
import PropsChild1 from "./PropsChild1"
import PropsChild2 from "./PropsChild2"
import PropsChild3 from "./PropsChild3"
import PropsChild4 from "./PropsChild4"
import Home from "./PropsDrilling/Home"
import ConditionalRendering from "./ConditionalRendering/Example1/ConditionalRendering"
import CondRendering from "./ConditionalRendering/Example2/CondRendering"

let PropsIntro = ()=>{

    let obj = {
        name : "prabhu sir",
        mobile : 987654321,
        qualification: "BCA"
    }

    let arr = ["Prasad sir",987654321,"BSC"]

    let [count, setCount] = useState(0)

    let updateCount = ()=>{
        setCount(count+1)
    }

    return(
        <div>

        {/* //name does'nt matter for Props */}
        {/* <PropsChild1 name="hello wrold" mobile="987654321"/> */}


        {/* <PropsChild1 msg="hello world" note="stay safe"/> */}


        {/* <PropsChild1 data={obj}/> */}


        {/* here we are sending data through object */}
        {/* <PropsChild2 data={obj}/> */}


        {/* here we are sending data through array */}
        {/* <PropsChild2 data={arr}/> */}


        {/* {count} */}
        {/* here we are sending data through function */}
        {/* <PropsChild3 data={updateCount}/> */}       {/* here we will not get children property in unpaired tag. */}


        {/* <PropsChild3 data={updateCount}>reterserf</PropsChild3> */}   {/* here we will not get children property in paired tag. */}
       
       {/* Here we are data through same component multiple times but the single component is called multiple times */}
       {/* <PropsChild4 color="red"/>
       <PropsChild4 color="green"/>
       <PropsChild4 color="blue"/> */}

        {/* here we are acheiving props drilling */}
       {/* <Home/> */}


        {/* Conditional Rendering */}
        {/* <ConditionalRendering/> */}

        {/* conditional rendering practice program */}
        <CondRendering/>
        </div>
    )
}
export default PropsIntro