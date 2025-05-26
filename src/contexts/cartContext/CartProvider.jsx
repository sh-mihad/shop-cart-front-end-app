import { useReducer } from 'react'
import { cartReducers } from '../../Reducers/cartReducers'
import { CartContext, CartDispatchContext } from './CartContext'

export default function CartProvider({ children }) {
    const [carts,cartDispatch] = useReducer(cartReducers,[])
    return (
        <CartContext.Provider value={carts}>
            <CartDispatchContext.Provider value={cartDispatch}>
                {
                    children
                }
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    )
}
