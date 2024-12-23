import React from 'react'

const EventsEx2 = () => {
    // let demo = (e)=>{       //here e stands for event object
    //     console.log("hello");
    // }
  return (
    <div>
        <button 
        onClick={(e)=>{
            e.target.textContent="You clicked button...!!"
            e.target.style.backgroundColor = "red"
        }}
        className='bg-purple-500 px-3 rounded-md text-white'>click me!!!</button>
    </div>
  )
}

export default EventsEx2