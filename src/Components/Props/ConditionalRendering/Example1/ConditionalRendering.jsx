import React, { useState } from 'react'
import Header from './Header'

const ConditionalRendering = () => {
    const [login,setLogin] = useState(false)
  return (
    <div>
        <Header data={{login,setLogin}}/>
    </div>
  )
}

export default ConditionalRendering