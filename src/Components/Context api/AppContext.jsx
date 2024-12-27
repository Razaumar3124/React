import React, { createContext, useState } from 'react'

export let myStore = createContext()
const AppContext = (props) => {
    let [state, setState] = useState(0)
  return (
    <myStore.Provider value={{state, setState}}>{props.children}</myStore.Provider>
  )
}

export default AppContext


// --------------------------------------------------------------------------------------------------------------------

// export let myStore = createContext()
// const AppContext = ({children}) => {
//     let [state, setState] = useState(0)
//   return (
//     <myStore.Provider value={{state, setState}}>{children}</myStore.Provider>
//   )
// }

// export default AppContext
