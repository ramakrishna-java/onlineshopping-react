import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <h1>Not Found</h1>
        <p>The requested page was not found</p>
        <p><a href="/">Back to Home</a></p>      
    </div>
  )
}

export default NotFoundPage
