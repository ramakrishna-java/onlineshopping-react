import React from 'react'
import PropTypes from 'prop-types'

class UserComponent  extends React.Component {
    render(){
        return(<>
        <p>Name: {this.props.name}</p>
        <p>Projects:{this.props.projects}</p>
        <p>Age: {this.props.age}</p>
        
        </>)
    }
}

UserComponent.defaultProps={
    name:"vinay"
}

UserComponent.propTypes={
    name: PropTypes.string.isRequired,
    projects: PropTypes.array,
    age(props, propName) {
        if(typeof props[propName] !== "number")
        return new Error("Age must me nuber")

        if(props[propName] >100) {
            return new Error("age entered is "+ props[propName] +" , it should be less than or equal to 100");
        }
    }
};

export default class App extends React.Component {

    render() {
        return(<>
        
        <UserComponent name={"ram"} projects={["telecom","health","payment"]}   age ={55}/>
        </>)
    }
}