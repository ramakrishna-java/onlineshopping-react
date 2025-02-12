import React  from "react";

class MyClassComponent extends React.PureComponent{
//class MyClassComponent extends React.Componentn{
    render(){
        return (<>
        <h1>Class Component, name: {this.props.myname}</h1>
        </>)
    }
}

export default MyClassComponent