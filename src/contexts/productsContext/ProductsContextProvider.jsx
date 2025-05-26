import { useReducer } from "react"
import { initialProducts } from "../../data/data"
import { productsReducer } from "../../Reducers/productReducers"
import { ProductDispatchContext, ProductsContext } from "./ProductContext"




export default function ProductsContextProvider({children}) {
  const [products,productDispatch] = useReducer(productsReducer,initialProducts)
  return (
    <ProductsContext.Provider value={products}>
      <ProductDispatchContext.Provider value={productDispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductsContext.Provider>
  )
}
