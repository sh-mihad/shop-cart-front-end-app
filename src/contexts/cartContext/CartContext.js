import { createContext, useContext } from "react";

export const CartContext = createContext([])
export const CartDispatchContext = createContext(null)
 
export const useCarts = ()=>{
    const carts = useContext(CartContext)
    return carts
}

export const useCartDispatch = ()=>{
    const cartDispatch = useContext(CartDispatchContext);
    return cartDispatch;
}