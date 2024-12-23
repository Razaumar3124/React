import React from 'react'

const PropsList = (props) => {
  return (
    
    <div style={{height:"100vh",width:"100vw",display: "flex", justifyContent: "space-around"}}>
        {props.data.map((e,i)=>{
            return (
                <div style={{
                    height: 400,
                    width: 280,
                    border: "1px solid red",
                    backgroundColor: "black",
                    borderRadius:5,
                    boxShadow: "3px 3px 15px salmon"
                }}>
                    <img src={e.images} style={{height: "200px",width: "230px",paddingLeft: "50px"  }}/>
                    <p style={{color: "salmon"}}>{e.title}</p>
                    <p style={{marginTop:7,color:"salmon"}}>{e.price} $</p>
                    <p style={{marginTop:7,color:"salmon"}}>{e.description}</p>
                    <button style={{
                        marginLeft: 80,
                        height: 40,
                        width: 120,
                        borderRadius: "5px",
                        marginTop:4,
                        backgroundColor: "black",
                        border: "1px solid salmon",
                        color: 'salmon'
                    }}>Add to Cart</button>
                </div>
            )
        })}

    </div>
  )
}

export default PropsList

// sending the data to multiple components