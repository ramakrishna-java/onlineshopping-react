import React from 'react'
import EmployeesApi from '../data/EmployeeApi'
import Employee from './Employee'
import ErrorBoundary from './ErrorBoundary'

export default class EmployeesComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
    }

    componentDidMount(){
        this.setState({employees: EmployeesApi.getAllEmployees()})
    }

    render() {
        let employeeNodes = this.state.employees.map(employee =>
            <ErrorBoundary key={employee.id} id={employee.id}>
                <Employee key={employee.id} id={employee.id} name={employee.name}
                location={employee.location}
             ></Employee>

            </ErrorBoundary>
        )

        return (
            <>
            {employeeNodes}
            </>
        )
    }
}