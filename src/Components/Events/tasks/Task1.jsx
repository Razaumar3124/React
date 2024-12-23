import React from 'react'

const Task1 = () => {
    let handleClick = (e)=>{
        e.target.disabled = true
        e.target.style.background = "red"
        e.target.textContent = "warning!! ☠️ Now button is disabled"
    }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <button 
        onClick={handleClick}
        className='bg-black text-white px-5'>Think before you click</button>
    </div>
  )
}

export default Task1