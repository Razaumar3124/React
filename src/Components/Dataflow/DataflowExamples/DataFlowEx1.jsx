import React, { useState } from 'react'
import DataFlowEx2 from './DataFlowEx2'

const DataFlowEx1 = () => {
    let [state,setState] = useState(0)
  return (
    <div>
        <DataFlowEx2 props={{state, setState}}></DataFlowEx2>
    </div>
  )
}

export default DataFlowEx1