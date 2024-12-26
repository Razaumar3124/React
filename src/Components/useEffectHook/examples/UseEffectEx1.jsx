import React, { useEffect, useState } from 'react'

//if we are not passing any dependencies array to the useEffectHook it acts as a normal block only
const UseEffectEx1 = () => {
    let [state,setState] = useState(0)
    console.log("start")
    useEffect(()=>{
        console.log("useEffect callback function called");
        let fetching = async()=>{
        let jsonData = await fetch("https://api.github.com/users")
        let Data = await jsonData.json()
        console.log(Data);
        }
      fetching()
    })
    console.log("end")

  return (
    <div>
        <h1>count : {state}</h1>
        <button onClick={()=>{setState(state+1)}} className='px-3 text-white bg-slate-500 rounded-md'>Increament</button>
    </div>
  )
}

export default UseEffectEx1