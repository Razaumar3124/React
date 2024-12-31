import React, { useReducer } from 'react'

const UseReducerEx2 = () => {
    let initialState = 0 
    let reducer = (state, action)=>{
        switch (action.type) {
            case "add":
                return state + action.value
                break;
            
            case "sub":
                return state - action.value
                break;
        
            default:
                return 0
                break;
        }
    }
    let [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <p>UseReducerEx2</p>
        <button onClick={()=>{dispatch({type:"add", value:10})}} className='bg-slate-500 text-white rounded-md p-3'>add : {state}</button>
        <button onClick={()=>{dispatch({type:"sub", value:5})}} className='bg-slate-500 text-white rounded-md p-3'>sub : {state}</button>
    </div>
  )
}

export default UseReducerEx2