import { useProductDispatch } from "../contexts/productsContext/ProductContext";

export default function ProductTopBar() {
    const productDispatch = useProductDispatch()

    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <select onClick={(e)=>{
                    productDispatch({
                        type:e.target.value
                    })
                }} className="border rounded-md px-2 py-1 text-sm">
                    <option value={"mostpopuler"}>Most Popular</option>
                    <option value={'newest'}>Newest</option>
                    <option value={'priceLowToHigh'}>Price: Low to High</option>
                    <option value={"priceHighToLow"}>Price: High to Low</option>
                </select>
            </div>
        </div>
    )
}
