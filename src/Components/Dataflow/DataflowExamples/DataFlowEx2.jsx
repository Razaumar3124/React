import React from 'react'

const DataFlowEx2 = (props) => {
    console.log(props.props);
  return (
    <div>
        <h1>{props.props.state}</h1>
        <button onClick={()=>{
            props.props.setState(props.props.state+1)
        }}>click</button>
    </div>
  )
}

export default DataFlowEx2