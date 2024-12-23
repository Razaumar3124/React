import React from 'react'

const TaskEx4 = () => {
  return (
    <div>
        <div className='h-[100vh] w-[100vw]'
        onMouseMove={(e)=>{
            e.target.textContent = `X : ${e.clientX} Y : ${e.clientY}`
        }}
        ></div>
    </div>
  )
}

export default TaskEx4