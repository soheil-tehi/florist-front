export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const MINUS_QUANTITY = "MINUS_QUANTITY";

export const addToCart = (plant) => {
    return (
        { type: ADD_TO_CART, payload: plant }
    )
}

export const addQuantity = (plant) => {
    return (
        { type: ADD_QUANTITY, payload: plant }
    )
}

export const minusQuantity = (plant) => {
    return (
        { type: MINUS_QUANTITY, payload: plant }
    )
}

export const removeFromCart = (plant) => {
    return (
        { type: REMOVE_FROM_CART, payload: plant }
    )
}