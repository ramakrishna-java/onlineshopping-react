import React, { useEffect, useState } from 'react'

const CounterComponentOne=()=>{
    const [count, setCount]=useState(0)

    useEffect(()=>{
        console.log('Counter 1:'+count)

    })
    return (<>
    <h1> useEffect demo...</h1>
    {console.log('inside render')}
    <span>Count:{count}</span>
    <button onClick={()=>setCount((preCount)=>preCount+1)}>Increment Count</button>    
    </>)
}

const  CounterComponentTwo =()=>{
    const [count, setCount] = useState(0)
    const [checked, setChecked] =useState(false)

    //useEffect -specifying dependent value as a second argument
    useEffect(()=>{
        console.log("counter 2:"+ count)
    }, [count])

    useEffect(()=>{
        console.log("checked:"+checked)
    }, [checked])

    return (<>
    <h1> useEffect executed conditionally</h1>
    <span> Count: {count}</span>
    <button onClick={()=> setCount(prevCount=>prevCount+1)}>Increment Counter</button>
    <div> 
        <input type="checkbox" onChange={()=>setChecked(prevChecked=>!prevChecked)} defaultChecked={checked}></input>
        <span> {checked ? "Checked":"UnChecked"} state</span>
    </div>
    
    
    </>)

}

const CounterFourComponent=()=>{
    const [count, setCount] =useState(0)

    //useEffect  - equivalent ComponentWillUnMount can be achieved by returning a cleanup function

    useEffect(()=>{
        console.log("counter four comp mounting setting up intervel")
        const interval =setInterval(()=>setCount(prevCount=> prevCount+1), 2000)
         
        return ()=> {
            console.log('CounterFour Component unmounting... clearing intervel...')
            clearInterval(interval)
        }

    }, [])

    return (<>
    <p> Count:{count}</p>
    
    
    </>)

}

const CounterFourContainer =() =>{
    const [show, setShow] =useState(true)

    return (<>
    <h1>useEffect -cleanup</h1>
    <button onClick={()=>setShow(prevShow=>!prevShow)}>{show? "Hide":"Show"} Counter</button>

    {show && <CounterFourComponent />}

    
    </>)

}



const App=()=>{
    return(<>
    { /* <CounterComponentOne/>  
    <CounterComponentTwo /> */}
    <CounterFourContainer />

    </>)
}

export default App

