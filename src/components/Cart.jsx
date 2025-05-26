import { useProducts } from "../contexts/productsContext/ProductContext";
import CartList from "./CartList";
import CartOrderSummary from "./CartOrderSummary";

export default function Cart() {
    const products = useProducts()
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
               {
                 products?.length === 0 ?<p>no products select yet</p>: <CartList />
               }
                <CartOrderSummary />
            </div>
        </div>
    )
}
