import ProductData from './ProductData'

export default class ProductApi {
    static getAllProducts() {
        return ProductData.products; //
    }
}