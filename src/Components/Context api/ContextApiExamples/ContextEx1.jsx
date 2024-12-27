import React, { useContext } from 'react'
import { myStore } from '../AppContext'

const ContextEx1 = () => {
    let data = useContext(myStore)
    console.log(data)
    let {state, setState} = data
    
  return (
    <>
        <div>state : {state}</div> 
        <button onClick={()=>{setState(state+1)}}>click</button>
    </>

  )
}

export default ContextEx1