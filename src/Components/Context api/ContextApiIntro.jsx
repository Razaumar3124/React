import React from 'react'
import ContextEx1 from './ContextApiExamples/ContextEx1'
import AppContext from './AppContext'
import ContextEx2 from './ContextApiExamples/ContextEx2'
import AppContext2 from './AppContext2'

const ContextApiIntro = () => {
  return (
    
    // <AppContext>
    //     <ContextEx1/>
    // </AppContext>

    <AppContext2>
        <ContextEx2/>
    </AppContext2>

  )
}

export default ContextApiIntro