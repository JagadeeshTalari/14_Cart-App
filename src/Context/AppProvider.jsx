import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from '../Reducer/reducer'
import { CLEAR_CART, DECREASE, DISPLAY_ITEMS, INCREASE, LOADING, REMOVE } from '../Reducer/actions'
import { getTotals } from '../utlis/getTotals'

const GlobalContext = createContext()
export const useGlobalContext = () =>  useContext(GlobalContext)

const initialState = {
    loading: false,
    cart: new Map()
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState )
    const {totalAmount, totalPrice} = getTotals(state.cart)
    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }
    
    const removeItem = (id) => {
        dispatch({type: REMOVE, payLoad:{id}})
    }

    const increase = (id) => {
        dispatch({type: INCREASE, payLoad:{id}})
    }

    const decrease = (id) => {
        dispatch({type: DECREASE, payLoad:{id}})
    }


    const fetchCartItems = async () => {
        dispatch({type: LOADING})
        const response = await fetch("https://course-api.com/react-useReducer-cart-project")
        const cartItems = await response.json()
        dispatch({type: DISPLAY_ITEMS, payLoad: {cartItems}})
    }

    useEffect(() => {
        fetchCartItems()
    },[])

    
    return (
        <GlobalContext.Provider value={{...state, clearCart,
            removeItem,
            increase,
            decrease,
            totalAmount, totalPrice }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppProvider