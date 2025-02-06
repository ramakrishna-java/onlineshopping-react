import React, {Component} from 'react'
//import CustomerListNormal from './components/CustomerListNormal'
//import EmployeeListNormal from './components/EmployeeListNormal'
import EmployeeList  from './components/EmployeeList'
//import EmployeeListNormal from './components/EmployeeListNormal'

export default class App extends React.Component {
    render() {
      return (
        <div>

<EmployeeList heading="Employee List (Normal)"/> 
        </div>
      )
    }
}

/*
          //<EmployeeListNormal heading="Employee List (Normal)"/>
         // <CustomerListNormal heading="Customer List (Normal)"/>  */