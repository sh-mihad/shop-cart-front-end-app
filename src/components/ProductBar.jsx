import ProductList from './ProductList'
import ProductTopBar from './ProductTopbar'

export default function ProductBar() {
    return (
        <div className="lg:col-span-2">
          <ProductTopBar/>
           <ProductList/>          
        </div>
    )
}
