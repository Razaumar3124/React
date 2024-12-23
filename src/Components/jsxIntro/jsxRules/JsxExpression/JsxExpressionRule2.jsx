//In jsx expression we cannot write any conditional statement except ternery operator and short curcuit operators
// if/else statements are not allowed inside jsx expression 
// Conditional statments are allowed inside jsx expression
// short curcuit operator is similar to only if condition and ternery is similar to both if/else statements
//in short circuit operator if the condition is true then it will execute and if not then it will be blank
//ternery operator --> if first statemnet is true then only the second statement will get executed
//short circuit opreator --> if first statemnet is true then second statement will not get checked

let JsxExpressionRule2 = ()=>{
    let mode = "light"
    let api = {}
    let username = "xyz"
    let password = 123

    return(
        <div>
            <h1>JsxExpressionRule2</h1>

            {/* <h1>{if(mode=="dark"){
                return <p>☀️</p>
            }
            else{                           //we cannot write it this way
                return <p>🌙</p>
            }
            }
            </h1> */}

            {/* <h1>{mode=="dark"?<p>☀️</p>:<p>🌙</p>}</h1>    // we can use ternery operators inside jsx expression */}

            {/* <h1>
                {mode=="light" && "its light mode"}             // we can use short circuit operators inside jsx expression
            </h1> */}

            <h1>
                {username=="xyz" && password == "123" && "welcome user" || "Wrong credentials"}
            </h1>           

            {/* <h1>
                {"a" && api.map((val)=>{
                    console.log(val);
                })}
            </h1> */}


        </div>
    )
}
export default JsxExpressionRule2