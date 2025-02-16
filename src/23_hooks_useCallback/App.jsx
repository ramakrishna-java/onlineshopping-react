import React,{useState, useCallback} from 'react'
import ButtonComponent from './ButtonComponent'

const App = () => {
    const [score, setScore]= useState(90)
    const [marks, setMarks]= useState(50)

    const incrementMarks = useCallback( ()=>{ //useCallback stores the function obj reference
        setMarks(marks+1)
    }, [marks])

    const incrementScore= useCallback(()=>{
        setScore(score+1)
    }, [score])

    //const incrementScore = ()=>setScore(score+1)
    //const incrementMarks =()=>setMarks(marks+1)


  return (
    <div>
        <h2> useCallback hook</h2>
        <div>
            <span>{score}</span>
            <ButtonComponent handleClick={incrementScore}>Increment Score</ButtonComponent>
        </div>
        <div>
            <span>{marks}</span>
            <ButtonComponent handleClick={incrementMarks}>Increment Marks</ButtonComponent>
        </div>
    </div>
  )
}

export default App
