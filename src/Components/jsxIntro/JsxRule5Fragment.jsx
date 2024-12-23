import React from "react"
import { Fragment } from "react"

let JsxRule5Fragment = ()=>{
    //! react fragmanets are simply "<></>" a pair of empty angular braces. by using resct fragments we are avoiding creation of extra nodes so that it will help to boost the app performance.
    // we can write react fragment in three different ways(all three ways are working):-

// this is the first way with empty angular braces but the drawback is that we can use key attribute in empty fragment
// return (
//     <>
//         <h1>Fragment</h1>
//         <p></p>
//     </>
// )

//the second way with React.Fragment and we can use key attribut in the react.fragment way
// return (
//     <React.Fragment key={1}>
//         <h1>Fragment</h1>
//         <p></p>
//     </React.Fragment>
// )

//this is the third way by destructuring fragment from react package and using it.
//the third way as Fragment only but for this you need ot import Fram=gment from react like.
// and we can use key attribut in the fragment way
return (
    <Fragment key={1}>
        <h1>Fragment</h1>
        <p></p>
    </Fragment>
)

}
export default JsxRule5Fragment
