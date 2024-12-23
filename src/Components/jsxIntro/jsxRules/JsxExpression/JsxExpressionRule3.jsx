import React from "react"

// whenever we are using map it is mandatory to use key attribute for react to uniquely identify the values
// we cannot use all the looping statements inside jsx expression. we can use only the higher order function. but all higher order function are also not useful. only those higher order function are useful that can return the jsx
// Mainly us Map/Filter/Reduce
let JsxExpressionRule3 = ()=>{
    let names = ["ram","sham","sita","geeta","meena"]
    return(
        <div>
            <h1>JsxExpressionRule3</h1>

            {/* <p>the names of the students are {names.map((element,i)=>{
                return <React.Fragment key={i}>{element}</React.Fragment>    
            })}</p>                  */}
            {/* here in map loop if there were 100 nodes to be created then using fragment it is avoided and the performance would be more enhanced*/}

            <p>the names of the students are {names.filter((val)=>{
                return val.endsWith("a") && (<div>{val}</div>)
            })}</p>
            {/* in the above example filter will create multiple divs instead of that use fragments */}


        </div>
    )
}
export default JsxExpressionRule3