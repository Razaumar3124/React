import React from 'react'

const TaskEx1 = () => {
  return (
    <div>
        <button 
        className='bg-slate-400 text-white b-[2px] px-4'
        onDoubleClick={(e)=>{
            let a = document.querySelector("p")
            a.innerText = "Shh! I’m a React developer undercover!"
        }}>click me!!</button>
        <p>secret message</p>
    </div>
  )
}

export default TaskEx1