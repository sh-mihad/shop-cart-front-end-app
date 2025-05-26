export const productsReducer = (state, action) => {
  switch (action.type) {
    case "mostpopuler": {
      return state.toSorted((a, b) => b.review - a.review);
    }
    case "decreaseQty": {
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, stockQty: item.stockQty-- };
        } else {
          return item;
        }
      });
    }
    case "increaseQty": {
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, stockQty: item.stockQty++ };
        } else {
          return item;
        }
      });
    }
    case "newest": {
      return state.toSorted((a, b) => {
        const dateA = new Date(a.createAt.split("-").reverse().join("-"));
        const dateB = new Date(b.createAt.split("-").reverse().join("-"));
        return dateB - dateA;
      });
    }
    case "priceLowToHigh": {
      return state.toSorted((a, b) => a.price - b.price);
    }
    case "priceHighToLow": {
      return state.toSorted((a, b) => b.price - a.price);
    }

    default: {
      return state;
    }
  }
};
