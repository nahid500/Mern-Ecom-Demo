import { useEffect, useState } from "react"
import { data } from '../data/db'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";


export default function ProductList() {

  const [products, setProducts] = useState([])
  const [sortCategory, setSortCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("none");
  const [search, setSearch] = useState('')
  const [priceRange, setPriceRange] = useState("all");


  useEffect(() => {
    const loadData = async () => {
      setProducts(data)
      // console.log(data);
    }
    loadData()
  }, [])

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const checkProduct = cart.findIndex((item) => item.id === product.id)

    if (checkProduct !== -1) {
      cart[checkProduct].quantity += 1
    }
    else {
      cart.push({ id: product.id, quantity: 1 })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    toast.success("Added to Cart Successfully!")
    console.log(cart);
  }


  const getFilteredProducts = () => {
    let filtered = [...products];

    if (sortCategory !== "all") {
      filtered = filtered.filter(product => product.category === sortCategory);
    }

    if (priceRange === "0-1000") {
      filtered = filtered.filter(product => product.price <= 1000);
    } else if (priceRange === "1001-3000") {
      filtered = filtered.filter(product => product.price > 1000 && product.price <= 3000);
    } else if (priceRange === "3001+") {
      filtered = filtered.filter(product => product.price > 3000);
    }

    if (sortPrice === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  };




  return (
    <div className="bg-slate-100 mt-6">

      <div className="flex justify-center ">
        <input type="text" name="search" id="search" className="px-32 focus:outline-cyan-600 text-center rounded-lg" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      </div>

      <h1 className="text-2xl text-cyan-800 font-bold text-center py-6">All Products</h1>


      <div className="flex gap-4 justify-center mb-6">
        <select
          value={sortCategory}
          onChange={(e) => setSortCategory(e.target.value)}
          className="border px-4 py-2"
        >
          <option value="all">All Categories</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
        </select>

        <select
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
          className="border px-4 py-2"
        >
          <option value="none">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="border px-4 py-2"
        >
          <option value="all">All Prices</option>
          <option value="0-1000">0 - 1000</option>
          <option value="1001-3000">1001 - 3000</option>
          <option value="3001+">3001 and above</option>
        </select>

      </div>

      <div className=" flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-4 md:grid-cols-3 md:mx-8 lg:grid-cols-4 gap-6 py-6">
          {getFilteredProducts().filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search)
          })
            .map((product) => (
              <div key={product.id} className="max-w-sm rounded shadow-lg bg-cyan-500 transition hover:translate-y-1 duration-300">
                <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
                <div className="px-6 py-4">
                  <h3 className="flex text-xl font-bold mb-2 justify-between text-white">
                    <span className=""> {product.title}</span>
                    <span className=""> ${product.price}</span>
                  </h3>

                  <div className="mt-4 flex flex-col gap-2">
                    <button
                      className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors w-full"
                      onClick={() => addToCart(product)}>

                      <span className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                        Add to Cart
                      </span>
                    </button>

                    <Link
                      to={`/product/${product.id}`}
                      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors w-full text-center"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clipRule="evenodd" />
                        </svg>
                        View Details
                      </span>
                    </Link>

                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>

  )
}