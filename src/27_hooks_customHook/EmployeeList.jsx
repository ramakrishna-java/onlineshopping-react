import React,{useRef} from "react";
import useItem from "./useItem";

let initialEmployees=[
    "Sachin",
    "ganguly",
    "rahul"
]

const EmployeeList=(props)=>{
    const [items, addItem] =useItem(initialEmployees, true)
    const nameRef= useRef(null)

    let itemList=items.map((item, index)=>(
        <li key={index}>{item}</li>
    ))

    return (
        <>
        <h2>Custome Hook Demo</h2>
        <label>Employee Name:
            <input type="text" ref={nameRef}></input>
        </label>
        <button onClick={()=>addItem(nameRef.current.value)}>Add Employee</button>

        <ul>{itemList}</ul>
        </>
    )
}

export default EmployeeList