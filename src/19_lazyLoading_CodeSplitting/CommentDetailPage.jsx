import React from 'react'
import {useParams} from 'react-router-dom' 

const CommentDetailPage = () => {
    let params = useParams();
  return (
    <div>
        <h2> Param Paseed: { params.id}</h2>
      
    </div>
  )
}

export default CommentDetailPage
