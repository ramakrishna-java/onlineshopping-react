import React from 'react'
import ProductList from './ProductList'
import ProductApi from '../data/ProductApi'
import {Link} from 'react-router-dom'


export default class AllProductsPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    async componentDidMount(){
        const data= await ProductApi.getAllProducts();
        this.setState({products:data})
    }
    render(){
        return(<>
        <h1>Products List</h1>
        <ProductList products={this.state.products} />
        <Link to="/addProduct">Add Product</Link> 
        
        </>)
    }
}