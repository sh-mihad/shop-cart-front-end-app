export const isItemAddedCart = (carts,itemId)=>{
    return carts.some(item=>item.id ===itemId)
}