
const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let subtotal = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
    let delivery = 5
    let total = subtotal + delivery
    return { itemCount, delivery, subtotal, total }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.cartItems.find(item => item.product_id === action.payload.product_id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } 

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.product_id !== action.payload.product_id)),
                cartItems: [...state.cartItems.filter(item => item.product_id !== action.payload.product_id)]
            }
        case "INCREASE":
            const increaseCartItems = state.cartItems.map(item => item.product_id === action.payload.product_id ? { ...item, quantity: action.payload.quantity + 1 } : item)
            return {
                ...state,
                ...sumItems(increaseCartItems),
                cartItems: increaseCartItems
            }
        case "DECREASE":
            const decreaseCartItems = state.cartItems.map(item => item.product_id === action.payload.product_id ? { ...item, quantity: action.payload.quantity - 1 } : item)
            return {
                ...state,
                ...sumItems(decreaseCartItems),
                cartItems: decreaseCartItems
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...sumItems([]),
                }
        default:
            return state

    }
}