import { useCarts } from "../contexts/cartContext/CartContext";
import CartList from "./CartList";
import CartOrderSummary from "./CartOrderSummary";

export default function Cart() {
    const cartProducts = useCarts()
    console.log("cartProducts",cartProducts);
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
               {
                 cartProducts?.length === 0 ?<p className="text-red-400">no products select yet</p>: <CartList />
               }
                <CartOrderSummary />
            </div>
        </div>
    )
}
