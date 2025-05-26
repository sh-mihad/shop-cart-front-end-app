import { useProducts } from "../contexts/productsContext/ProductContext";
import { useSearch } from "../contexts/serchContext/SerchContext";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const products = useProducts()
    const {searchTerms} = useSearch()
    let productsUi = products.filter(item=>{
        if(searchTerms){
            console.log("");
            return item.title.toLowerCase().includes(searchTerms.toLowerCase())
        }else{
            return true
        }
    })
    if(productsUi.length === 0){
        return <div className="flex items-center justify-center">
            <p className="text-center font-bold text-red-500">No Products Found</p>
        </div>
    }
    return (
        <div className="product-grid grid-cols-4">
            {
                productsUi.map(product => <ProductCard key={product.id} product={product} />) 
            }
        </div>
    )
}
