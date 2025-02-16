import React, {useState,useMemo} from "react";

const App=()=>{
    const[num1, setNum1] =useState(1)
    const[num2, setNum2] =useState(1)

    const incrementNum1=()=>{
        setNum1(num1+1)
    }

    const incrementNum2=()=>{
        setNum2(num2+1)
    }

    const double=()=>{
        return num1*2
    }
     const triple=()=>{
        for( let i =0;i<10000000000000;i++)

        return num2*3    
    } 

    const tripleValue   = useMemo(()=>{
        for(let i =0;i<90000999900009900000;i++)
            return num2*3
    },[num2]) 

    return (<>
    <h2>useMemo Demoo</h2>
    <div>
        <p> Num1: {num1}, Double of Num1: {double()}</p>
        <button onClick={incrementNum1}> Double of the number</button>
    </div>
    <div>
        <p>Num2:{num2}, Triple of the Num2:{tripleValue}</p>
        <button onClick={incrementNum2}>Triple of the number</button>
    </div>
    </>)

}

export default App