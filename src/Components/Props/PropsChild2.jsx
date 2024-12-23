//Here we are sending the data through object
// let PropsChild2 = (props)=>{
//     let {name,mobile,qualification} = props.data
//     return(
//         <div>
//             {name}
//         </div>
//     )
// }
// export default PropsChild2

//Here we are sending the data through an array
let PropsChild2 = (props)=>{
    let [name,mobile,qualification] = props.data
    return(
        <div>
            {name}
        </div>
    )
}
export default PropsChild2
