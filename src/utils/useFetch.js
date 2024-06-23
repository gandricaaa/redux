import productService from "../services/productService";
import porductService from "../services/productService";
import { useState, useEffect } from "react";

const useFetch = (uslov) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        if (uslov === 'vechile'){
            productService.getProductByCategory()
            .then(res =>{
                setData(res.data.products)
                setLoading(true)
    
            })
            .catch(err => console.log(err))
        }else{
            porductService.getAllProducts()
            .then(res =>{
                setData(res.data.products)
                setLoading(true)
    
            })
            .catch(err => console.log(err))
        }
    },[])
    return (data,loading)
}
export default useFetch