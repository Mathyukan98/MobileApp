import axios from 'axios';

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};


export const loginUser = (userData) => ({
  type: 'LOGIN_USER',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
