import React from 'react'

export default class EmployeeListNormal extends React.Component {
    constructor(props) {
        super(props);
        this.refName =  React.createRef();

        this.state ={employees:[]}
    }

    addEmployee =(name) =>{
        this.setState(prevState=> {
            return {employees: [...prevState.employees, name.toUpperCase()]};
        })
    }

    render(){
        let employees =this.state.employees.map((employee, index)=>(
            <li key={index}>{employee}</li>
        ))

        return(<>
        <h2> {this.props.heading}</h2>
        <label>
            Enter Employee name:
            <input type="text" ref={this.refName} />
        </label>
        <button onClick={()=>this.addEmployee(this.refName.current.value)}>Add Employee</button>
        <ul>{employees}</ul>
        </>)

    }

}