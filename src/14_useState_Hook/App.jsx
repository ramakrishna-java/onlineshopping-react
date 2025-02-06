import React from 'react'
import { useState } from 'react'

const CheckboxComponent = ()=>{
    const [checked, setChecked]=useState(false);
    const handleCheckBox =()=>{
        setChecked(initialVal=>!initialVal)
    }
    let checkBoxVal=checked?"Checked":"UnChecked"
    return(<>
    <h2> checckbox state demo</h2>
    <input type="checkbox" onChange={handleCheckBox} defaultValue={checked}  />
    <span> {checkBoxVal}</span>    
    </>)    
}

const TitleComponent =()=>{
    const [text, setText]=useState('initial text')

    const handleText = (e)=>setText(e.target.value)

    return(<>
    <h2>title test demo -TEXT</h2>
    <input type="text" defaultValue={text} onChange={handleText}/>

    <span>Title:{text}</span>
    
    </>)
}

const FullNameComponent=()=>{
    const [fullName, setFullName]= useState({firstName:'',lastName:''})

    const firstNameHandler=(e)=>setFullName({...fullName, firstName:e.target.value})
    const lastNameHandler=(e)=> setFullName({...fullName, lastName:e.target.value})

    return(<div>
    <h1>use state -Object</h1>
    <label>Enter First name: <input type="text" defaultValue={fullName.firstName} 
    onChange={firstNameHandler}></input></label>

    <label> Enter Last Name: <input type="text" defaultValue={fullName.lastName}
      onChange={lastNameHandler}></input></label>
      <span>{fullName.firstName} { fullName.lastName}</span>
    
    </div>)
}

const AddEmployee =()=>{
    const [employee, setEmployee] = useState([])
    const addEmpHandler =()=>setEmployee([...employee, `EMP${employee.length}`])
    return(<>
    <h1> Add Employee deemo-Array</h1>
    <button onClick={addEmpHandler} >Add Employee</button><br/>
    <ul> {employee.map((emp,index)=>(
        <li key={index}>{emp} </li>
    ))}</ul>
    
    </>)
}

const MultipleStateDateComponentsInSingleState =()=>{
    const [myObject, setMyObject] =useState({checked:false, count:0, name:''})

    const handleChecked =()=>setMyObject({...myObject,checked:!myObject.checked})
    const handleCount=(e)=> setMyObject({...myObject,count:e.target.value})
    const handleName=(e) =>setMyObject({...myObject, name:e.target.value})

    return(<>
    <h1> useState multiple state data</h1>
    <input type="checkbox" onChange={handleChecked} defaultChecked={myObject.checked} />
    <input type="number" onChange={handleCount} defaultValue={myObject.count} />
    <input type="text" onChange={handleName} defaultValue={myObject.name} />
    <br/>
    <span> Checked:{myObject.checked ? "true":"false"}, Count:{myObject.count}, Name:{myObject.name}</span>
    
    </>)
}

const MultipleStateDateComponentsInMultipleStates =()=>{
    //const [myObject, setMyObject] =useState({checked:false, count:0, name:''})
    const [checked, setChecked]=useState(false)
    const [count, setCount]=useState(0)
    const [name, setName]=useState('')


    const handleChecked =()=>setChecked(prevChecked => !prevChecked)
    const handleCount=(e)=> setCount(e.target.value)
    const handleName=(e) =>setName(e.target.value)

    return(<>
    <h1> useState multiple state data</h1>
    <input type="checkbox" onChange={handleChecked} defaultChecked={checked} />
    <input type="number" onChange={handleCount} defaultValue={count} />
    <input type="text" onChange={handleName} defaultValue={name} />
    <br/>
    <span> Checked:{checked ? "true":"false"}, Count:{count}, Name:{name}</span>
    
    </>)
}

const App = () => {
  return (
    <div>
        <h2>State Demo using React Hooks</h2>
        {  /*  <div>
            
            <CheckboxComponent />
        <TitleComponent />
        <FullNameComponent/>
        <AddEmployee/>   
        <MultipleStateDateComponentsInSingleState />  
        </div> */


        <div>
                    <br></br>
                    <MultipleStateDateComponentsInMultipleStates />

            </div>
        }
      
    </div>
  )
}

export default App
