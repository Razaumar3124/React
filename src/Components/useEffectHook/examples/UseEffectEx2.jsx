import React, { useEffect, useState } from 'react'

//if we are not passing any dependencies array to the useEffectHook it acts as a normal block only
//we must pass dependency array if not it is of no use
//when we pass empty dependincy array it acts as a componentdidmount lifecycle method so that 
// 1) it will execute once throughout the lifecycle method
// 2) it will execute at the end of the mounting phase
//we will use this syntax for mostly calling the api's so that api's will not get called unneccessorily and repeatedly
const UseEffectEx2 = () => {
    let [state,setState] = useState(0)
    useEffect(()=>{
        let fetching = async()=>{
            let jsonData = await fetch("https://api.github.com/users") //here it will get readed once
            let Data = await jsonData.json()
            console.log(Data);
        }
        fetching()
    },[])
    return (
      <div>
          <h1>count : {state}</h1>
          <button onClick={()=>{setState(state+1)}} className='px-3 text-white bg-slate-500 rounded-md'>Increament</button>
      </div>
    )
}

// -------------------------------------------------------------------------------------------------------------

// const UseEffectEx2 = () => {
//     let [state,setState] = useState(0)
//     useEffect(()=>{
//         let fetching = async()=>{
//             let jsonData = await fetch("https://api.github.com/users") //here it will get readed again and again bcoz 
//             let Data = await jsonData.json()                            //we have not passed any dependencies
//             console.log(Data);
//         }
//         fetching()
//     })
//     return (
//       <div>
//           <h1>count : {state}</h1>
//           <button onClick={()=>{setState(state+1)}} className='px-3 text-white bg-slate-500 rounded-md'>Increament</button>
//       </div>
//     )
// }

export default UseEffectEx2