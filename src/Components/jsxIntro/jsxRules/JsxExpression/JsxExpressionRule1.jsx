let JsxExpressionRule1 = ()=>{
    console.log("hello world");

    return(
        <div>
            <h1>JsxExpressionRule1</h1>
            {/* Rule1==> we should not write console statement inside jsx expression, because it will not get dispalyed on UI */}
            {/* <div>{console.log("hello world")} DIV</div> */}
        </div>
    )
}
export default JsxExpressionRule1