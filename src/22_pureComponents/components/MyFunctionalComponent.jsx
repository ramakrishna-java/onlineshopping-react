import React from 'react'

const MyFunctionalComponent = ({myname}) => {
    console.log("Rendering Functional Component...")
  return (
    <div>
        <h1>Functional Component, name: {myname}</h1>
      
    </div>
  )
}

export default MyFunctionalComponent
//export default React.memo(MyFunctionalComponent)   //Pure Component -HOC