import React from 'react'

const TaskEx3 = () => {
    let handleContextMenu = ()=>{
        alert("Ha! You thought you could outsmart React?")
    }
  return (
    <div>
        <button onClick={handleContextMenu}
        className="bg-purple-400 text-white px-4">Right click me</button>
    </div>
  )
}

export default TaskEx3