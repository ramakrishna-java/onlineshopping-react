import React from 'react'
import EmployeeForm from './components/EmployeeForm.jsx'


//const App=()=> <EmployeeForm />
//export default App


//container component => updates the model or does server update

export default class App extends React.Component {
    handleFormSubmit(values) {
        console.log("handle submit from App component")
        console.log("i am parent / Container")
        console.log(values)

    }
    render(){
        return <EmployeeForm onSubmit={(values)=>this.handleFormSubmit(values)} />
    }

}