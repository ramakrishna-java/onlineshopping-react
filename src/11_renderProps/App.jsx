import React, {Component} from 'react'
import Item from './components/Item.jsx'
//import CustomerListNormal from './components/CustomerListNormal'
//import EmployeeListNormal from './components/EmployeeListNormal'
import EmployeeList  from './components/EmployeeList'
import CustomerList from './components/CustomerList'
//import EmployeeListNormal from './components/EmployeeListNormal'

export default class App extends React.Component {
    render() {
      return (
        <div>

          <Item isUpper={true} render={(items, addItem)=>(
            <EmployeeList items={items} addItem={addItem} heading="Emp List using render props" />
          )} />
          <Item render={(items, addItem)=>(
            <CustomerList items={items} addItem={addItem} heading="Customer1e List using render props" />
          )} />
        </div>
      )
    }
}

/*
          //<EmployeeListNormal heading="Employee List (Normal)"/>
         // <CustomerListNormal heading="Customer List (Normal)"/>  */