import React from 'react'
import ProductList from './ProductList'
import ProductApi from '../data/ProductApi'


export default class AllProductsPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.setState({products:ProductApi.getAllProducts()})
        
    }
    render(){
        return(<>
        <h1>Products List</h1>
        <ProductList products={this.state.products} />
        
        </>)
    }
}