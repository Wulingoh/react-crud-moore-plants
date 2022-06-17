const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems, shipping) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, item) => total + item.itemQuantity,
    0
  );
  let subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.itemQuantity,
    0
  );
  let total = subtotal + shipping;
  return { itemCount, shipping, subtotal, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.cartItems.find(
          (item) => item.product_id === action.payload.product_id
        )
      ) {
        state.cartItems.push({
          ...action.payload,
          itemQuantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems, state.shipping),
        cartItems: [...state.cartItems],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter(
            (item) => item.product_id !== action.payload.product_id
          ),
          state.shipping
        ),
        cartItems: [
          ...state.cartItems.filter(
            (item) => item.product_id !== action.payload.product_id
          ),
        ],
      };
    case "INCREASE":
      const increaseCartItems = state.cartItems.map((item) =>
        item.product_id === action.payload.product_id
          ? { ...item, itemQuantity: action.payload.itemQuantity + 1 }
          : item
      );
      return {
        ...state,
        ...sumItems(increaseCartItems, state.shipping),
        cartItems: increaseCartItems,
      };
    case "DECREASE":
      const decreaseCartItems = state.cartItems.map((item) =>
        item.product_id === action.payload.product_id
          ? { ...item, itemQuantity: action.payload.itemQuantity - 1 }
          : item
      );
      return {
        ...state,
        ...sumItems(decreaseCartItems, state.shipping),
        cartItems: decreaseCartItems,
      };
    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([], 0),
      };
    case "SHIPPING":
      return {
        cartItems: state.cartItems,
        ...sumItems(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
