import { useState } from "react"
import { useCartDispatch, useCarts } from "../contexts/cartContext/CartContext"
import { isItemAddedCart } from "../utils/utils"

export default function ProductCard({ product }) {
  const [isAddCart,setIsAddCart] = useState(false)

  const cartDispatch = useCartDispatch()
  const cartItems = useCarts()
  const handleAddToCart = () => {
    const isItemAddedBefore = isItemAddedCart(cartItems, product.id)
    if (isItemAddedBefore)return;
  
      const cartData = {
      ...product,
      qty: product.stockQty
    }
    cartDispatch({
      type: "addCart",
      item: cartData
    })
    setIsAddCart(true)
    
   
  }
  const handleRemoveCart = () => {
    cartDispatch({
      type: "removeCart",
      id: product.id
    })
    setIsAddCart(false)
  }
  const reviewArr = new Array(5).fill(false)
  for (let i = 0; i < product.review; i++) {
    reviewArr[i] = true
  }
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={product.img} alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              {
                reviewArr.map(review => {
                  if (review) {
                    return <span>★</span>
                  } else {
                    return <span className="text-gray-300">★</span>
                  }
                })
              }

            </div>
            <span className="text-xs text-gray-500 ml-1">{product.review}/5</span>
          </div>
          <span className="text-xs text-gray-700">({product.stockQty} pcs left)</span>
        </div>
        <p className="font-bold">${product.price} </p>
        {
          isAddCart ? 
        <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center" onClick={handleRemoveCart}>Remove from Cart</button>
        :
         <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900" onClick={handleAddToCart}>Add to Cart</button>
       }
       
      </div>
    </div>
  )
}
