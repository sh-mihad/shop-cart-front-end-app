export const cartReducers = (state,action)=>{
   switch (action.type) {
    case 'addCart':{
       return [...state,{...action.item,qty:1}]
    }
    case 'removeCart':{
       return state.filter(cartItem=>cartItem.id !== action.id)
    }
    case 'increaseQty':{
       return state.map(item=>{
        if(item.id === action.id){
            return {...item,qty:item.qty ++}
        }else{
         return item
        }
       })
    }
    case 'decreaseQty':{
      return state.map(item=>{
        if(item.id === action.id){
            return {...item,qty:item.qty --}
        }else{
         return item
        }
       })
    }
    default:
        return state;
   }
}