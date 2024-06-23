import axios from "axios";
axios.defaults.baseURL = "https:/dummyjson.com";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router";
import { useEffect } from "react";
import ProductService from "./services/productService";
import { useDispatch } from "react-redux";
import { saveProductAction } from "./store/productSlice";
function App() {
	const dispatch = useDispatch();
	useEffect(() =>{
		ProductService.getAllProducts()
		.then ((res) => {
			dispatch(saveProductAction(res.data.products))
		})
		.catch (err => console.log(err))		
	},[])
	return (
		<div className="container mx-auto">
			<NavbarComponent/>
			<Outlet/>
		</div>
	)
}

export default App;
