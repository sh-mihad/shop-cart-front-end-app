import Cart from './Cart'
import ProductBar from './ProductBar'

export default function Dashboard() {
    return (
        <main className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <ProductBar/>
               <Cart/>
            </div>
        </main>
    )
}
