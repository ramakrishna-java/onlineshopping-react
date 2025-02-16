import React, {useContext} from 'react'
import {store} from './App'


const ComponentA = () => {
    const[data, setData]=  useContext(store);

  return (
    <div className='card'>
        <div className='card-body'>
        <h1> ComponentA{data}</h1></div>
      
    </div>
  )
}

export default ComponentA
