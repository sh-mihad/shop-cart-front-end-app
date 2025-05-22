export const productsReducer = (state,action)=>{
    switch (action.payload) {
        case 'mostpopuler':{
            return state.toSorted((a,b)=>b.review - a.review)
        }            
        case 'newest':{
            return state.toSorted((a,b)=>{
                const dateA = new Date(a.createAt.split("-").reverse().join("-"))
                const dateB = new Date(a.createAt.split("-").reverse().join("-"))
                return dateB-dateA
            });
        }
        case 'priceLowToHigh':{
            return state.toSorted((a,b)=>a.price - b.price)
        }
        case 'priceHighToLow':{
            return state.toSorted((a,b)=>b.price - a.price)
        }
        case 'search':{
            return 
        }
    
        default:
            return state;
    }
}