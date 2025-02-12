import React  from "react";
import MyClassComponents from './components/MyClassComponent.jsx'
import MyFunctionalComponent from './components/MyFunctionalComponent.jsx'

//class App extends React.Component{
class App extends React.PureComponent {
    constructor(props){
        super(props)
        this.refName=React.createRef();
        this.state={
            name:''
        }
    }

    handleSubmit(){
        let inputName=this.refName.current.value
        this.setState({name: inputName})
    }

    render(){
        console.log("Rendering App Component")
        return (<>
            <label>
                Enter name:<input type="text" ref={this.refName}/>
            </label>
            <h1>App Name: {this.state.name}</h1>
            <button onClick={()=>this.handleSubmit()}>submit</button>
            <MyClassComponents myname={this.state.name}/>
            <MyFunctionalComponent myname={this.state.name}/>
            <span style={{color:'red'}}> check the javascript consolet to see the behaviour of Pure components</span>
        </>)
    }

}

export default App