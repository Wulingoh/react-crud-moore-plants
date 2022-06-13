import React, {
  createContext,
  useContext,
  useReducer
} from "react";
import { CartReducer, sumItems } from './CartReducer';


const CartContext = createContext();
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

export const CartProvider = ({
  children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const removeItem = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const contextValues = {
        removeItem,
        addProduct,
        increase,
        decrease,
        clearCart,
        ...state
    } 

  return (
    <CartContext.Provider value={contextValues}>
      { children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
}
