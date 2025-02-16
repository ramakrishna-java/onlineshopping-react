import React,{useContext, useState} from 'react'
import {store} from'./App'


const Display = () => {
    const[data, setData] =useContext(store)
    const[name, setName]=useState();

    const submitHandler=e=>{
        e.preventDefault();
        setData([...data,{ brandName:name}])
            }
  return (
    <div className='card'>
        <div className='card-body'>
        <h1>Items:</h1>
        {data.map((item,index) =><h1 key ={index}>{item.brandName}</h1>)}

        <form onSubmit={submitHandler}>
            <input type="text" onChange={e=>setName(e.target.value)}></input>
            <input type="submit" value="Add" />

        </form>
      
        </div></div>
  )
}

export default Display
