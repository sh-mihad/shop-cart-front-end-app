import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"
import ProductsContextProvider from "./contexts/productsContext/ProductsContextProvider"
import SearchProvider from "./contexts/serchContext/SearchProvider"

function App() {

  return (
    <ProductsContextProvider>
      <SearchProvider>
        <Navbar />
        <Dashboard />
        <NewsLetter />
      </SearchProvider>
    </ProductsContextProvider>
  )
}

export default App
