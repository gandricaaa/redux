import { useDispatch, useSelector } from "react-redux"
import '../styles/main.scss';
import { saveInCartAction } from "../store/productSlice";

function ProductsPage() {
    const dispatch = useDispatch();
    const handleCart = () =>{
        dispatch(saveInCartAction())
    }
    const {allProducts, isLoading} = useSelector((state) => state.productStore)
  return (
    <div className="wrapper">
        {isLoading ? allProducts.map((product) => {
          return <div className="wrapper_card" key={product.id}>
            <img src={product.thumbnail} alt="" />
            <h2>{product.title}</h2>
            <div className="wrapper_btn">
            <button className="btn wrapper_more">View More</button>
            <button onClick={() => handleCart(product)} className="btn wrapper_cart">Add To Cart</button>
            </div>
          </div>  
        }): <h1>Loading</h1>}
    </div>
  )
}

export default ProductsPage