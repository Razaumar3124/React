import React, { useState } from 'react'

const EventsEx3 = () => {
    let name = ""
    let [userInput,setUserInput] = useState("")
  return (
    <div>
        {/* <form action="">
            <input onChange={(e)=>{
                name = e.target.value
                console.log(name)
                }} type="text" className='border-[1px] border-gray-700'/>
            <button className='bg-indigo-300 px-4 m-1'>click</button>
        </form> */}

        {/* we will mostly use useState only */}

        <form action="">
            <input onChange={(e)=>{
                setUserInput(e.target.value)
                console.log(userInput)
                }} type="text" className='border-[1px] border-gray-700'/>
            <button className='bg-indigo-300 px-4 m-1'>click</button>
        </form>
        <p>{userInput}</p>

    </div>
  )
}

export default EventsEx3