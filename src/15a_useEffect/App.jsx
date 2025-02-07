
import React, { useEffect,useState } from 'react'
import axios from 'axios'

const EmployeesComponent =()=>{
    const [employees, setEmployees] =useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/employees')
            .then(response=>setEmployees(response.data))
            .catch(error=>console.log(error))
    },[])

    return (<>
    <h1>Employee List::</h1>
    <ul>
    {employees.map(emp=>
        <li key={emp.id}>{emp.id}. {emp.name} - {emp.location}</li>
    )}  </ul>
    
    </>)
}

const EmployeeComponent =() =>{
    const [employees, setEmployess] =useState([])
    const [id, setId] =useState(1)

    useEffect(()=>{
        axios.get(`http://localhost:3001/employees/${id}`)
        .then(response=>setEmployess(response.data))
        .catch(error=>console.log(error))
    }, [id])

    return (<>
    <h3>Employee Details....</h3>
    <label>enter employee id: <input type="number" min={1} max={3}
     value={id} onChange={e=>setId(e.target.value)}/>
    </label>
    <p>{employees.id}. {employees.name} , {employees.location}</p>
    </>)
}

const App= ()=>{

    return (<>
    <EmployeesComponent />
    <EmployeeComponent />
    </>)


}

export default App