import React from 'react'
import {MyComponent} from './MyComponent';
import './MyComponent.css'

export default class App extends React.Component  {
    constructor(props) {
        super(props);

        this.state={show:true}
    }

    handleButtonClick() {
        this.setState((prevValue)=>({show: !prevValue.show}))
    }

    render(){
        return(<>
        <h1>React Life Cycle Demo:</h1>
        <button onClick={()=>this.handleButtonClick()}>{this.state.show? "Hide": "Show"} My Component</button>
        {this.state.show && <MyComponent/>}
        
        
        </>)
    }

}