import React,{useState,useRef} from 'react'
import EmpCompUsingReducer from './EmpCompUsingReducer'


const EmployeeComponent=()=>{
    let initialState={
    employees:[{
        name:'ram',
        mail:'ram@mail.com',
        manager:true
    }]
}

    const[employees,setEmployees] = useState(initialState.employees)

    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const managerRef=useRef(null)

    const addNewEmployee=()=>{
        setEmployees([...employees, {
            'name':nameRef.current.value,
            'mail':emailRef.current.value,
            'manager':managerRef.current.checked
        }])
    }

    const deleteEmployee=(name)=>{
        setEmployees(employees.filter(emp=>emp.name !== name))
    }

    return (<>
    <h1>Employee List - useState Hook</h1>
    <input type="text" ref={nameRef} placeholder="Enter Name:"></input>
    <input type='text' ref={emailRef} placeholder="Enter email:"></input>
    <input type='checkbox' ref={managerRef}/>
    <button onClick={()=>addNewEmployee()}> Add EMployee</button>
    <ul>{
        employees.map((emp, index)=>(
            <li key={index}  onClick={()=>deleteEmployee(emp.name)}>
                {emp.name}, {emp.mail}, {emp.manager?"Manager":"Employee"}
            </li>
        )
        
        )
        
        }</ul>
    
    </>)
}


const App =()=>{
    return (<div>
        <EmployeeComponent/>

        <EmpCompUsingReducer/>

    </div>)
}
export default App