import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.name=React.createRef();
        this.age=React.createRef();
    }

    retrieve() {
        let name=this.name.current.value;
        let age =this.age.current.value;

        alert('retrieved name is:' +name +"  && Age is:"+age)
        this.name.current.focus();
    }

    render() {
        return(<React.Fragment>
            <div>
                <label>Enter Name:<input type="text" ref={this.name} /> </label>
                <label>Enter Age:<input type="text" ref={this.age} /></label><br/>
                <button onClick={()=>this.retrieve()}> Retrieve Name and Display</button>
            </div>
            </React.Fragment>)
    }
}