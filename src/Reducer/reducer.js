import { CLEAR_CART, DECREASE, DISPLAY_ITEMS, INCREASE, LOADING, REMOVE } from "./actions"

export const reducer = (state, action) => {
    if(action.type === CLEAR_CART){
        return {...state, cart: new Map()}
    }
    
    if(action.type === DISPLAY_ITEMS){
        const newCart = new Map(action.payLoad.cartItems.map(item => [item.id, item]))
        return {...state, loading: false, cart: newCart}
    }
    if(action.type === LOADING){
        return {...state, loading:true}
    }
    if(action.type === INCREASE){
        const newCart = new Map(state.cart);
        const currentId = action.payLoad.id
        let currentItem = newCart.get(currentId)
        // console.log(currentItem)
        currentItem = {...currentItem, amount: currentItem.amount + 1}
        // console.log(currentItem.amount)
        newCart.set(currentId, currentItem)
        return {...state, cart: newCart}
    }
    if(action.type === DECREASE){
        const newCart = new Map(state.cart);
        const currentId = action.payLoad.id
        let currentItem = newCart.get(currentId)
        // console.log(currentItem)
        currentItem = {...currentItem, amount: currentItem.amount - 1}
        // console.log(currentItem.amount)
        if(currentItem.amount === 0){
            newCart.delete(currentId)
            return {...state, cart: newCart }
        }
        newCart.set(currentId, currentItem)
        return {...state, cart: newCart}
    }

    if(action.type === REMOVE){
        const newCart = new Map(state.cart);
        const currentId = action.payLoad.id
        newCart.delete(currentId)
        return {...state, cart: newCart }

    }

    throw new Error(`No matching ${action.type} - action type found`)
} 