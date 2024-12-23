import React from 'react'
import style from "./style.module.css"

const Cart = (props) => {
  return (
    <div id={style.main}>
        <nav>
            <div id={style.navLeft}>logo</div>
            <div id={style.navRight}>
                <a href="#" onClick={()=>{
                    if (props.data.Login==true){
                        alert("first login")
                    }
                }}>Home</a>
                <a href="#">Menu</a>
                {props.data.login?(<a href="#" onClick={()=>{
                    props.data.setLogin(false)
                }}>Logout</a>):(
                <>
                <a href="#" onClick={()=>{
                    props.data.setLogin(true)
                }}>Login</a>
                <a href="#" onClick={()=>{
                    props.data.setLogin(true)
                }}>Signup</a>
                </>
                )}
            </div>
        </nav>
        <main>
            
        </main>
    </div>
  )
}

export default Cart