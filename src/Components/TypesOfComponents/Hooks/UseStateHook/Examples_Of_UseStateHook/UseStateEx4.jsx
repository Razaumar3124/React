import { useState } from "react";


let UseStateEx4 = ()=>{

//here we are using return keyword to return something from the map loop
    // let courses = useState(["html","css","javascript","reactjs"])
    // console.log(courses);
    // return(
    //     <div>
    //         {
    //             courses.map((element,i)=>{
    //                 return <h1 key={i}>{element}</h1>
    //             })
    //         }
    //     </div>
    // )

//here we are using not using return keyword instead we give it paranthesis to return something from the map loop
    // let courses = useState(["html","css","javascript","reactjs"])
    // console.log(courses);
    // return(
    //     <div>
    //         {
    //             courses.map((element,i)=>(
    //                 <li key={i}>{element}</li>
    //             ))
    //         }
    //     </div>
    // )

    // let obj = {
    //     name : "abc",
    //     number : 123
    // }
    // console.log(obj)
    // return(
    //     <div>
    //         {obj.name}
    //     </div>
    // )


    let jsonData = [
        {
            "category": "beauty",
            "title": "Essence Mascara Lash Princess",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "price": 9.99,
            "brand": "Essence",
            "tags": [
              "Beauty",
              "Mascara"
            ]
          },
          {
            "category": "beauty",
            "title": "Eyeshadow Palette with Mirror",
            "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
            "price": 19.99,
            "brand": "Glamour Beauty",
            "tags": [
              "Beauty",
              "Eyeshadow"
            ]
          },
          {
            "category": "beauty",
            "title": "Powder Canister",
            "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
            "price": 14.99,
            "brand": "Velvet Touch",
            "tags": [
              "Beauty",
              "Face Powder"
            ]
          },
          {
            "category": "beauty",
            "title": "Red Lipstick",
            "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
            "price": 12.99,
            "brand": "Chic Cosmetics",
            "tags": [
              "Beauty",
              "Lipstick"
            ]
          },
          {
            "category": "beauty",
            "title": "Red Nail Polish",
            "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
            "price": 8.99,
            "brand": "Nail Couture",
            "tags": [
              "Beauty",
              "Nail Polish"
            ]
          },
        
    ]
    return(
        <div>
            {jsonData.map((e,i)=>{
                return (
                    <div>{e.brand},{e.category},{e.description},{e.price}</div>
                    
                )

            })}
        </div>
    )
}
export default UseStateEx4