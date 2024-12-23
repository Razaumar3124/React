//Here we are sending the data through functions

let PropsChild3 = (props)=>{
    console.log(props);

    return(
        <div>
            <button onClick={()=>{props.data()}}>click</button>
        </div>
    )
}
export default PropsChild3