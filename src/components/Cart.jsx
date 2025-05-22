import CartList from "./CartList";
import CartOrderSummary from "./CartOrderSummary";

export default function Cart() {
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
                <CartList />
                <CartOrderSummary />
            </div>
        </div>
    )
}
