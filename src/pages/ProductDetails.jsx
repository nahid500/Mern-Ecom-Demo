import { useParams } from "react-router"
import {data} from "../data/db"
import { useEffect, useState } from "react"

export default function ProductDetails() {

    const {id} = useParams()
    const [product, setProduct] = useState("")

    useEffect(() => {
            const showProduct = data.find(item => item.id.toString() === id)
            setProduct(showProduct)
        }, [id])
    
    
    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []

        const checkProduct = cart.findIndex((item) => item.id === product.id)

        if(checkProduct !== -1){
            cart[checkProduct].quantity += 1
        }
        else{
            cart.push({...product, quantity:1})
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(cart);
    } 

    return(
        <div className="bg-slate-100 p-5 md:py-28">

            <div className="grid grid-cols-1 justify-center md:grid-cols-2">
                <div className=" flex justify-center md:justify-end md:pr-8">
                    <img src={product.image} width={350} className="hover:translate-y-2"/>
                </div>

                <div className=" flex flex-col py-5">
                    <span className="text-cyan-600 text-xl font-semibold mt-1">Product Name: {product.title} </span> 
                    <span className="text-cyan-600 text-xl font-semibold mt-1">Description: {product.desc}</span>
                    <span className="text-cyan-600 text-xl font-semibold mt-1">Category: {product.category}</span>
                    <span className="flex mt-2 items-center gap-2">
                        <span className="text-cyan-600 font-semibold text-xl">Rating:</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-yellow-400">0
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-yellow-400">0
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-yellow-400">0
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-yellow-400">0
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                    </span>

                    <span className="text-green-600 text-2xl font-bold mt-4">Price: {product.price}</span>


                    <button className="bg-blue-700 mt-4 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors md:w-44"
                    onClick={() => addToCart(product)}>
                    
                    <span className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    Add to Cart
                    </span>
                    
                    </button>

                </div>
            </div>



        </div>
        

    )
}