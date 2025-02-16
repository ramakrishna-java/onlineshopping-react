import React from "react";
import {EmpConsumer} from './EmpContext'

export default class EmpForm extends React.Component {
    render(){
        return (<>
        <h3>Employee Form:</h3>
        <EmpConsumer>
            {(contextVal)=>(
                <>
                <label> Employee Name:</label>
                    <input type="text" onInput={(e)=>contextVal.setEmpName(e.target.value)}
                     defaultValue={contextVal.empName} />
                     <label>Manager:
                        <input type="checkbox" onInput={()=>contextVal.toggleManager()} 
                        defaultChecked={contextVal.manager}></input>
                     </label>

                </>
            )}
        </EmpConsumer>
        </>)
    }
}