import React from 'react'
import './MyComponent.css'


export class MyComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={name:"Ram"}

        console.log("in constructor")
    }

    componentWillMount() { //depricated
        console.log("in componentWillMount")
    }

    componentDidMount() {
        console.log("in componentDidMount")
    }

    componentDidUpdate() {
        console.log("in componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("in componentWillUnmount")
    }


    handleTextInput(e) {
        this.setState({name:e.target.value})
    }

    render() {
        console.log("in render mehod")
        return(<>
        <h1> My Componenr</h1>
        <div id="demo-container">
            <h3>CSS in React</h3>
        </div>
        <input type="text" defaultValue={this.state.name} onInput={(e)=>this.handleTextInput(e)}></input>
        </>)
    }
}