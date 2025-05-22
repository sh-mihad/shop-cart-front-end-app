import { createContext, useContext } from "react"

export const ProductsContext= createContext(null)
export const ProductDispatchContext = createContext(null)

export const useProducts =()=>{
  const products = useContext(ProductsContext)
  return products
}

export const useProductDispatch = ()=>{
   const productDispatch = useContext(ProductDispatchContext)
   return productDispatch
}