import React from 'react'

const EventsEx1 = () => {
    let demo = ()=>{console.log("hello");}
    let demo1 = (name)=>{console.log("hello",name);}


  return (
    <div>

    {/* <button 
    onMouseOver={()=>{console.log("button hovered")}} 
    className="bg-slate-400 px-3">
        click
    </button> */}

    {/* <button 
    onMouseOver={demo}      //here we don't have to call the function reference name is enough but if we want to call then it also acceptable 
    className="bg-slate-400 px-3">
        click
    </button> */}

    {/* <button 
    onMouseOver={demo1("prasad")}     // if we want to call the function then it also acceptable but it will execute immediately which we don't want in certain conditions instead of that we use the below given method
    className="bg-slate-400 px-3">
        click
    </button> */}

    <button 
    onMouseOver={()=>{demo1("prasad")}}     // here the problem of immediately execution is fixed because first the fuction will execute then the demo1 function will execute
    className="bg-slate-400 px-3">
        click
    </button>

    </div>
  )
}

export default EventsEx1