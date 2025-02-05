import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            empName: "Ram",
            bManager: true
        }
    }

        handleInputText(e) {
            this.setState({empName:e.target.value});
        };

        handleCheckboxValue(){
            this.setState((prevValue)=> ({bManager: !prevValue.bManager}));
        }

        render() {
            
            let role=this.state.bManager?" Manager":" Employee";
            return(<>
            <h1>State Demo</h1>
            <div>
                <label>Emp Name:
                <input type="text" onInput={e=>this.handleInputText(e)}  defaultValue={this.state.empName}/>
                </label>
                <label><input type="checkbox" onChange={()=>this.handleCheckboxValue()} 
                defaultChecked={this.state.bManager}  ></input>isManager<br/>
                </label>
                <p>{this.state.empName} is {role}</p>


            </div>
            
            </>)
        }    
}