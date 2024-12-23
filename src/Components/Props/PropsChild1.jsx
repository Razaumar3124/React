// let PropsChild1 = (props)=>{
//     console.log(props.data.name);
//     return(
//         <div>
//             {props.data.name}
//         </div>
//     )
// }
// export default PropsChild1

let PropsChild1 = (props)=>{
    console.log(props.msg,props.note);
    
    return(
        <div>
            {/* {props.msg,props.note} */}      {/* here it will give the updated value */}
            {/* {props.note} */}

            {/* {props.msg +", "+ props.note} */}
        </div>
    )
}
export default PropsChild1