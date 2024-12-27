import React, { useEffect } from 'react'

// const UseEffectforEx7 = () => {
//     let timer = setInterval(()=>{
//         console.log("holla");
//     },1000)
//     useEffect(()=>{
//         console.log("child comp leaving");   
//         clearInterval(timer)
//     },[])
//   return (
//     <div>UseEffectforEx7</div>
//   )
// }

// export default UseEffectforEx7


// -----------------------------------------------------------------------------------------------------------------------
// if we are not clearing setInterval manually even if we leave the comp or switch the comp it will run in the background 
// which eventually the bandwidth will be more which is bad

const UseEffectforEx7 = () => {
    let timer = setInterval(()=>{
        console.log("holla");
    },1000)
    useEffect(()=>{
        console.log("child comp leaving");   
    },[])
  return (
    <div>UseEffectforEx7</div>
  )
}

export default UseEffectforEx7