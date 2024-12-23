let JsxRule2 = ()=>{
    //! we can return only one jsx element at a time. if we want to returnmore than one line of jsx, we must wrap that jsx in between one parent element 
    
//! It will work because we are returning more than one element with one parent div element
return (
    <div>
        <div>JsxRule2</div>
        <div></div>
        <p>we can return only one jsx element at a time. if we want to returnmore than one line of jsx, we must wrap that jsx in between one parent element</p>
    </div>
)

//! It will not work because we are returning more than one element without any parent element
// return (
//         <div>JsxRule2</div>
//         <div></div>
// )
}
export default JsxRule2

