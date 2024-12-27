import React, { useEffect, useState } from 'react'

const UseEffectEx6 = () => {
    let [state1, setState1] = useState(0)
    let [state2, setState2] = useState(0)
    let [state3, setState3] = useState(0)
    let [state4, setState4] = useState(0)

    useEffect(()=>{
        setState2(state2+100)
    },[state1])

    useEffect(()=>{
        setState3(state3+50)
    },[state2])

    useEffect(()=>{
        setState4(state4+20)
    },[state3])

  return (
    <div>
        <span className='py-4' style={{margin : "0px 20px"}}>state1 : {state1}</span>
        <span className='py-4' style={{margin : "0px 20px"}}>state2 : {state2}</span>
        <span className='py-4' style={{margin : "0px 20px"}}>state3 : {state3}</span>
        <span className='py-4' style={{margin : "0px 20px"}}>state4 : {state4}</span><br /><br />
        <button className='' onClick={()=>{setState1(state1+1)}}>Increament</button>
    </div>
  )
}

export default UseEffectEx6