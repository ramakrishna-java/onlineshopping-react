import React from 'react'

const ButtonComponent = ({handleClick, children}) => {
    console.log('Rendaring Button, '+children)
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
      
    </div>
  )
}

//export default ButtonComponent
export default React.memo(ButtonComponent)