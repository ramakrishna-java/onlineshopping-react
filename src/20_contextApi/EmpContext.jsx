import React  from "react";
export const EmpContext =React.createContext()

export class EmpProvider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            empName: "sachin",
            manager:true
        }
    }

    render(){
        return (
            <EmpContext.Provider value={{
                ...this.state, 
                setEmpName:(name)=>this.setState({empName:name}),
                toggleManager:()=>this.setState(prevState=>({manager:!prevState.manager}))
            }} >
            {this.props.children}
            </EmpContext.Provider>
        )
    }
}

export const EmpConsumer=EmpContext.Consumer