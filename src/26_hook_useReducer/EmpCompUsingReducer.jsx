import React,{useReducer,useRef} from 'react'

const initialState={
    employees:[
        {
            name:"Ram",
            email: 'ram@mail.com',
            manager:false
        }
    ]
}

const reducer =(state, action)=>{
    switch(action.type) {
        case 'ADD_EMPLOYEE':
            return {
                employees: [
                    ...state.employees, action.payload
                ]
            }
        case 'DELETE_EMPLOYEE':
            return {
                employees:state.employees.filter(emp=>emp.name !== action.payload.name)
            }
        default :
        return state
    }
}


const EmpCompUsingReducer = () => {

    const[state, dispatch] =useReducer(reducer, initialState)
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const managerRef=useRef(null)

    const addEmployee=()=>{
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload:{
                'name':nameRef.current.value,
                'email':emailRef.current.value,
                'manager':managerRef.current.checked
            }
        })
    }

    const deleteEmployee=(name)=>{
        dispatch({
            type:'DELETE_EMPLOYEE',
            payload: {
                'name':name
            }
        })
    }

    return (<>
        <h1>Employee List - useState Hook</h1>
        <input type="text" ref={nameRef} placeholder="Enter Name:"></input>
        <input type='text' ref={emailRef} placeholder="Enter email:"></input>
        <input type='checkbox' ref={managerRef}/>
        <button onClick={()=>addEmployee()}> Add EMployee</button>
        <ul>{
            state.employees.map((emp, index)=>(
                <li key={index}  onClick={()=>deleteEmployee(emp.name)}>
                    {emp.name}, {emp.email}, {emp.manager?"Manager":"Employee"}
                </li>
            )
            
            )
            
            }</ul>
        
        </>)
}

export default EmpCompUsingReducer
