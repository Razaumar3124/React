import React, { useEffect, useState } from 'react'

//if we pass any dependency in two dependency array, useEffects callback function will get called only when there is some
// changes into the dependency 
// this useEffect callback functions will get called everytime whenever there is change into the dependency value
const UseEffectEx3 = () => {
    let [state,setState] = useState(0)
    useEffect(()=>{
        console.log("useEffect callback function called");
    },[])
    useEffect(()=>{
        console.log("useEffect callback function mounted")
    },[])
    return (
      <div>
          <h1>count : {state}</h1>
          <button onClick={()=>{setState(state+1)}} className='px-3 text-white bg-slate-500 rounded-md'>Increament</button>
      </div>
    )
}

export default UseEffectEx3