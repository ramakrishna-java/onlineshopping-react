import React from "react";

export default class CounterDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state={counter:0}
    }

    incrementCounter =()=>{
        this.setState({counter:this.state.counter+1})
    }

    decrementCounter=()=>{
        this.setState({counter:this.state.counter-1})
    }

    render() {
        return (<div>
            <h1>Counter Demo</h1>
            <h3>Counter: {this.state.counter}</h3>

            <button onClick={this.incrementCounter}>Increment Counter</button>
            <button onClick={this.decrementCounter}>Decrement Counter</button>


        </div>)
    }

}