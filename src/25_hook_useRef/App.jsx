import React,{useState,useEffect, useRef} from "react";

const App=()=>{
    const [count, setCount]=useState(0)
    const refName=useRef(null) //DOM Reference
    const refIntervel=useRef(null) //Mutable Value Reference

    useEffect(()=>{
        refIntervel.current=setInterval(()=>{
            setCount(prevCount=>prevCount+1)
        },1000)
    },[])

    const retrieve =()=>{
        let name=refName.current.value;
        alert("Retrieved Name from text box:"+name)
        refName.current.focus()
    }

    return (<>
    <h2> useRef Demo</h2>
    <label>Enter Your Name:
        <input type="text" ref={refName}></input>
        <button onClick={()=>retrieve()}>  Retrive Name And Display</button>
    </label>

    <div>
        <p>Count:{count}</p>
        <button onClick={()=>clearInterval(refIntervel.current)}> Clear Timer</button>
    </div>
    </>)
}

export default App