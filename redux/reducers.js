// reducers.js
import { combineReducers } from 'redux';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    default:
      return state;
  }
};


const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};




export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer
});
