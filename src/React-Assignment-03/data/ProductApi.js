import ProductData from './ProductData'
import axios from 'axios';

/* export default class ProductApi {
    static getAllProducts() {
        return ProductData.products; //
    }
}  */


//ES2017 way of writing promise
export default class ProductApi {
    static async getAllProducts() {
        try {
            const response =await axios.get("http://localhost:3001/products");
            return response.data;
        }catch(error) {
            console.log('failed')
        }
    }

      // Save a new product with auto-incremented ID
  static async saveProduct(product) {
    try {
      // Get the latest products list to determine the next ID
      const products = await this.getAllProducts();
      const lastId = products.length > 0 ? Math.max(...products.map((p) => p.id)) : 0;
      
      const newProduct = { ...product, id: lastId + 1 };

      const response = await axios.post("http://localhost:3001/products", newProduct);
      return response.data;
    } catch (error) {
      console.error("Failed to save product:", error);
    }
  }

  static async getProductById(id) {
    try {
      const response = await axios.get("http://localhost:3001/products/"+`${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch product with ID ${id}:`, error);
      return null;
    }
  }
}