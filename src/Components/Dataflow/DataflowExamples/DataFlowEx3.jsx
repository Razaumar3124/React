import React from 'react'
import DataFlowEx3Support from './DataFlowEx3Support';

const DataFlowEx3 = () => {
    function hello(val) {
        console.log(val);
    }
  return (
    <div>
        <DataFlowEx3Support props={{hello}}></DataFlowEx3Support>
    </div>
  )
}

export default DataFlowEx3