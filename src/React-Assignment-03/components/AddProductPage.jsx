import React from 'react'
import {useNavigate} from 'react-router-dom'
import ProductApi from '../data/ProductApi'
import ProductForm from './ProductForm'

//container component is the one which will interact with the model
export default ()=>{
  const navigate = useNavigate();

  const saveProduct = (data) =>{
    ProductApi.saveProduct(data)
    navigate('/')
  }

  return (
    <ProductForm onSave={(data)=>saveProduct(data)} />
    )

}
