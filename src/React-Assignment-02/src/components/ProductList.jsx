import React from 'react'
import Product from './Product'

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let productNode= this.props.products.map(product => (
            <Product key={product.id} id={product.id} productName={product.productName}  quantity={product.quantity}
                price={product.price}
            ></Product>
        ));
        return(<>
        <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            <thead> 
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px" }}> ID</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}> Product Name</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Quantity</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Price</th>

                </tr>
            </thead>
            <tbody>
                {productNode}
            </tbody>
            </table>        
        </>)
    }
}