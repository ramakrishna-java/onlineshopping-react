import React,{createContext,useState} from 'react'
import Count from './Count';
import Display from './Display';


export const store=createContext();
const App = () => {

  const[data, setData] =useState([
    {brandName:"Nokia"},
    {brandName: "MI"},
    {brandName: "Samsung"}
  ])
  return (
    <div>
      <store.Provider value={[data, setData]}>
        <Count/>
        <Display/>
      </store.Provider>
      
    </div>
  )
}

export default App
