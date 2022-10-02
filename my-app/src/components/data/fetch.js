import axios from "axios"


const Fetch=()=>{

return axios.get("https://fakestoreapi.com/products/category/men's clothing")


}

const Fetchwomen=()=>{

    return axios.get("https://fakestoreapi.com/products/category/women's clothing")
    
    
    }





export  {Fetch,Fetchwomen}