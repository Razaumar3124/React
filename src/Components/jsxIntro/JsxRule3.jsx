let JsxRule3 = ()=>{
    //! Each and every tag inn jsx must be closed

// it will work because we have closed all the tags in jsx
return (
    <div>
        JsxRule3
        <div>
            <br />
            <hr />
            <img src="" alt="" />
            <input type="text" />
        </div>
    </div>
)

// it will not work because we are not closing all the elements or tags in jsx 
// return (
//     <div>
//         JsxRule3
//         <div>
//             <br>
//             <hr>
//             <img src="" alt="">
//             <input type="text">
//         </div>
//     </div>
// )

}
export default JsxRule3