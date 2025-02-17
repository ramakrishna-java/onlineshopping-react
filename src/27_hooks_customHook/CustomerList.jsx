import React,{useRef} from "react";
import useItem from "./useItem";

let initialCustomers=[
    "Dell",
    "GE",
    "Cisco"
]

const CustomerList=(props)=>{
    const [items, addItem] =useItem(initialCustomers, true)
    const nameRef= useRef(null)

    let itemList=items.map((item, index)=>(
        <li key={index}>{item}</li>
    ))

    return (
        <>
        <h2>initialCustomers Hook Demo</h2>
        <label>Customers Name:
            <input type="text" ref={nameRef}></input>
        </label>
        <button onClick={()=>addItem(nameRef.current.value)}>Add Customer</button>

        <ul>{itemList}</ul>
        </>
    )
}

export default CustomerList