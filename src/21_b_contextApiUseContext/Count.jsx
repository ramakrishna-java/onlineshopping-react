import React,{useContext} from 'react'
import {store} from './App'

const Count = () => {
    const [data, setData]=useContext(store)
  return (
    <div>
        <h1>Item Count:{data.length}</h1>
      
    </div>
  )
}

export default Count
