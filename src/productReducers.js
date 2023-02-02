import { actionTypes } from "./state/ProductState/actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: "",
  cart: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHINH_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionTypes.FETCHINH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case actionTypes.FETCHINH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};
