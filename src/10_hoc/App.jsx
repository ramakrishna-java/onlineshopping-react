import React, {Component} from 'react'
import CustomerListNormal from './components/CustomerListNormal'
import EmployeeListNormal from './components/EmployeeListNormal'

export default class App extends React.Component {
    render() {
      return (
        <div>
          <EmployeeListNormal heading="Employee List (Normal)"/>
          <CustomerListNormal heading="Customer List (Normal)"/>
        </div>
      )
    }
}