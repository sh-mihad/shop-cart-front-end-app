import { useCartDispatch } from "../contexts/cartContext/CartContext"

export default function CartCard({cartItem}) {
    const cartDispatch = useCartDispatch()
    const handleIncreaseQty = ()=>{
       cartDispatch({type:'increaseQty',id:cartItem.id})
    }
    const handleDecreaseQty = ()=>{
       cartDispatch({type:'decreaseQty',id:cartItem.id})
    }
    return (
        <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img src={cartItem.img} alt="Gradient Graphic T-shirt"
                    className="h-full w-auto object-cover" />
            </div>
            <div className="flex-grow">
                <div className="flex justify-between">
                    <h3 className="font-medium">{cartItem.title}</h3>
                    <span className="text-red-500 text-sm cursor-pointer" onClick={()=>cartDispatch({type:'removeCart',id:cartItem.id})}>×</span>
                </div>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">${cartItem.price}</p>
                    <div className="flex items-center space-x-2">
                        <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center" onClick={handleDecreaseQty}>−</button>
                        <span className="text-sm">{cartItem.qty}</span>
                        <button onClick={handleIncreaseQty} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
