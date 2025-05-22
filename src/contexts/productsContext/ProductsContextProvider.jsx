import { useReducer } from "react"
import { initialProducts } from "../../data/data"
import { productsReducer } from "../../Reducers/productReducers"




export default function ProductsContextProvider({children}) {
  const [products,productDispatch] = useReducer(initialProducts,productsReducer)
  return (
    <ProductsContext.Provider value={products}>
      <ProductDispatchContext.Provider value={productDispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductsContext.Provider>
  )
}
