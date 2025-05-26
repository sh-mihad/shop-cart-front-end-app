import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"
import CartProvider from "./contexts/cartContext/CartProvider"
import ProductsContextProvider from "./contexts/productsContext/ProductsContextProvider"
import SearchProvider from "./contexts/serchContext/SearchProvider"

function App() {

  return (
    <ProductsContextProvider>
      <SearchProvider>
        <CartProvider>
          <Navbar />
          <Dashboard />
          <NewsLetter />
        </CartProvider>
      </SearchProvider>
    </ProductsContextProvider>
  )
}

export default App
