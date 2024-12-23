import React, { useState } from 'react'

const EventsEx4 = () => {
    let [state,setState] = useState({
        username : ""
    })
    let handleChange = (e)=>{
        setState({
            username : e.target.value
        })
        console.log(state)
    }
  return (
    <div>
        <form action="">
            <input onChange={handleChange} type="text" name="username" value={state.username} className='bg-slate-300 border-[1px] border-black'/>
            <button className='bg-slate-300 px-4'>click</button>
        </form>
    </div>
  )
}

export default EventsEx4