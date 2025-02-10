import React from 'react'
import {useNavigate} from 'react-router-dom'
import CommentForm from './CommentForm'
import CommentApi from './data/CommentApi'

//container component is the one which will interact with the model
export default ()=>{
  const navigate = useNavigate();

  const saveComment = (comment) =>{
    CommentApi.saveComment(comment)
    navigate('/')
  }

  return (
    <CommentForm onSave={(data)=>saveComment(data)} />
    )

}
