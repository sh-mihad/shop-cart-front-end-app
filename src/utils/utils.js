export const isItemAddedCart = (carts,itemId)=>{
    return carts.some(item=>item.id ===itemId)
}

export const getAllCartProductsPrice = (carts)=>{
   const totalPrice = carts.reduce((prev,item)=>{
    return prev += item.qty*item.price
   },0)

   return totalPrice
}