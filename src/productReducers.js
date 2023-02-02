import { actionTypes } from "./state/ProductState/actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: "",
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
        products: action.payload.products,
      };
    case actionTypes.FETCHINH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
