import React, { useState } from 'react'
import UseEffectforEx7 from './UseEffectforEx7'

const UseEffectEx7 = () => {
    let [state, setState] = useState(true)
    let handleclick = ()=>{
        setState(!state)
    }
  return (
    <div>
        <div>UseEffectEx7</div>
        <button onClick={handleclick} className='bg-blue-600 px-4 text-white border-black border-[1px]'>{state? "Remove Child Comp" : "Add Child Comp"}</button>
        <div>{state? <UseEffectforEx7/> : "click comp to call child comp"}</div>
    </div>
  )
}

export default UseEffectEx7