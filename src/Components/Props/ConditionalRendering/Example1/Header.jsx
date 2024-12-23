import React from 'react'
import style from "./rendering.module.css"

const Header = (props) => {
  return (
    <div id={style.main}>
        <div id={style.left}>
            logo
        </div>
        <div id={style.right}>
            <a href="#" onClick={()=>{
                if (!props.data.login){
                    alert("Please login")
                }
                
            }}>Home</a>
            <a href="#" onClick={()=>{
                if (!props.data.login){
                    alert("Please login")
                }
            }}>Menu</a>
            {props.data.login?(<a href="#" onClick={()=>{
                props.data.setLogin(false)
            }}>Logout</a>):(
            <>
            <a href="#" onClick={()=>{
            props.data.setLogin(true);
            }}>Login</a>
            <a href="#" onClick={()=>{
                props.data.setLogin(true)
            }}>Signup</a>
            </>
            )}
            
            
        </div>
    </div>
  )
}

export default Header