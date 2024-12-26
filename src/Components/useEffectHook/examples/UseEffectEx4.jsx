import React, { useEffect, useState } from 'react'

//simply we can pass multiple dependencies if there is any change in any of the dependency value the cllback function 
// will get called
// the sequence of multiple dependencies does not matter 
const UseEffectEx4 = () => {
    let [state,setState] = useState(0)
    let [state2,setState2] = useState(0)
    useEffect(()=>{
        console.log("something change in any of the dependencies");     
    },[state,state2])
  return (
    <div>
        <button onClick={()=>{setState(state+1)}} className='bg-green-400 text-white px-4 rounded-md'>count : {state}</button>
        <button onClick={()=>{setState2(state2+1)}} className='bg-green-400 text-white px-4 rounded-md'>count : {state2}</button>
    </div>
  )
}

export default UseEffectEx4