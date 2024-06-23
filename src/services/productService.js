import axios from "axios";

class productService {
    static getAllProducts = () => axios.get('/products?limit=10&skip=160');
    static getProductByCategory = () => axios.get ('/products/category/vehicle')
}
export default productService