import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { data } from "../data/db";


export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const productsInCart = cart.map(({ id, quantity }) => {
      const product = data.find(p => p.id === id);
      if (!product) return null; 
      return { ...product, quantity };
    });

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.info("Item removed from cart");
  };

  const totalAmount = productsInCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 bg-gray-50 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {productsInCart.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">Your cart is empty.</div>
      ) : (
        <div className="space-y-6">
          {productsInCart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span className="font-semibold"> Quantity: {item.quantity}</span>
              </div>

              <div className="mt-4 md:mt-0 text-lg font-bold text-green-600">
                ${(item.price * item.quantity)}
              </div>

              <button onClick={() => removeItem(item.id)} className="mt-4 md:mt-0 text-sm text-red-500 hover:underline">Remove</button>
            </div>
          ))}

          <div className="text-right text-xl font-bold text-gray-700">
            Total Bill: ${totalAmount}
          </div>

          <div className="text-right">
            <button onClick={() => toast.success("Order Confirmed")} className="mt-4 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition">
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
