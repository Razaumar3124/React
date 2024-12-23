import React from 'react'
import Cart from './Cart'

const Header = (props) => {
  return (
    <div>
        <Cart data={props.name}/>
    </div>
  )
}

export default Header