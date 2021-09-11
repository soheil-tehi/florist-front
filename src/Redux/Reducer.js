import {
    ADD_TO_CART,
    ADD_QUANTITY,
    MINUS_QUANTITY,
    REMOVE_FROM_CART,
  } from "./Actions";
  
  

  // localStorage.setItem("cartItem", JSON.stringify([]))
  export const CartReducer = (
    state = JSON.parse(localStorage.getItem("cartItems")),
    action
  ) => {
    switch (action.type) {
      case ADD_TO_CART:
        if (state == null) {
          state = [];
        }
        if (state) {
          const plantExist = state.find(
            (plant) => plant._id === action.payload._id
          );
  
          if (plantExist) {
            const newState = JSON.parse(JSON.stringify(state));
            newState.forEach((item) => {
              if (item._id === action.payload._id) item.ccount += 1;
            });
  
            localStorage.setItem("cartItems", JSON.stringify(newState));
            return newState;
          }
        }
  
        action.payload.ccount = 1;
  
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...state, action.payload])
        );
  
        return [...state, action.payload];
  
      // .................................ADD
      case ADD_QUANTITY:
        const newState = JSON.parse(JSON.stringify(state));
  
        newState.forEach((item) => {
          if (item._id === action.payload._id) {
            item.ccount += 1;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(newState));
        return newState;
  
      // .....................................MINUS
  
      case MINUS_QUANTITY:
        const newState2 = JSON.parse(JSON.stringify(state));
        newState2.forEach((item) => {
          if (item._id === action.payload._id) item.ccount -= 1;
        });
  
        if (action.payload.ccount === 1) {
          localStorage.setItem(
            "cartItems",
            JSON.stringify(state.filter((item) => item._id !== action.payload._id))
          );
          return state.filter((item) => item._id !== action.payload._id);
        }
  
        localStorage.setItem("cartItems", JSON.stringify(newState2));
  
        return newState2;
  
      // ....................................REMOVE
  
      case REMOVE_FROM_CART:
        localStorage.setItem(
          "cartItems",
          JSON.stringify(state.filter((item) => item._id !== action.payload._id))
        );
        return state.filter((item) => item._id !== action.payload._id);
  
      default:
        return state;
    }
  };
  