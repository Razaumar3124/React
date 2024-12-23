// return statement is expecting the single value on the same line and f there are multi-line of code then it should wrapped in parathesis or parent element or container
let JsxExpressionRule4 = ()=>{

    // this way will work
    return <div>
        <h1>JsxExpressionRule4</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo cupiditate aliquid.</div>
    </div>      

    // this below example will not work because the returned div is on second line and not on the same line
    // return 
    // <div>
    // //     <h1>JsxExpressionRule4</h1>
    // //     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo cupiditate aliquid.</div>
    // // </div>  

}
export default JsxExpressionRule4