import React, { useEffect, useState } from 'react'

const UseEffectEx5 = () => {
    let [cartItem, setCartItem] = useState(0)
    let [total, setTotal] = useState(1000)
    useEffect(()=>{
        setTotal(total+100)
    }, [cartItem])
    useEffect(()=>{
        console.log("we are checking your eligibility for free delivery");
    }, [total])
  return (
    <div>
        <h1>cart item : {cartItem}</h1>
        <h1>total : {total}</h1>
        <button onClick={()=>{
            setCartItem(cartItem + 1)
        }}>add to cart</button>
    </div>
  )
}

export default UseEffectEx5