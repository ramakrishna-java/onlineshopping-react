import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductApi from '../data/ProductApi';

const ProductDetailPage = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await ProductApi.getProductById(id);
            setProduct(data);
        };
        
        if (window.confirm('Are you sure... you want to see the product details?')) {
            fetchProduct();
        }
    }, [id]);

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Product Name:</strong> {product.productName}</p>
            <p><strong>Quantity:</strong> {product.quantity}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <button onClick={() => navigate('/products')} type="button">Back to Product List</button>
        </div>
    );
};

export default ProductDetailPage;
