import React, {createContext, useState} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export const store = createContext();

const App = () => {
  const [data, setData]=useState(0)
  return (
    <div>
      <store.Provider value={[data, setData]}>
        <h1>HIiiiiiiiiiiiiiii</h1>
        <ComponentA/>
        <ComponentB/>
        <button onClick={()=>setData(data+1)}>Increment State by 1</button>
        </store.Provider>
      
    </div>
  )
}

export default App
