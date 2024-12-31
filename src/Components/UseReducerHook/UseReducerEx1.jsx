import React, { useReducer } from 'react'

const UseReducerEx1 = () => {
    let initialState = 0
    let reducer = (state, action)=>{
        switch (action) {
            case "add":
                return state+1
                break;

            case "sub":
                return state-1
                break;
        
            default:
                return 0
                break;
        }

    }
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <p>UseReducerEx1</p>
        <p>state : {state}</p>
        <button onClick={()=>{dispatch("add")}} className='bg-orange-500 text-white p-3 rounded-md'>add</button>
        <button onClick={()=>{dispatch("sub")}} disabled={state==0} className='bg-white border-[1px] bordder-black text-blue-500 p-3 rounded-md'>sub</button>
        <button onClick={()=>{dispatch("reset")}} className='bg-green-500 text-white p-3 rounded-md'>reset</button>
    </div>
  )
}

export default UseReducerEx1