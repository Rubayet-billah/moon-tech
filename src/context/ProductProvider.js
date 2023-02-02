import React, { createContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { initialState, productReducer } from "../productReducers";
import { actionTypes } from "../state/ProductState/actionTypes";
const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHINH_START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionTypes.FETCHINH_SUCCESS,
          payload: { products: data },
        });
      })
      .catch((err) =>
        dispatch({ type: actionTypes.FETCHINH_ERROR, payload: { error: err } })
      );
  }, []);

  const values = {
    state,
    abc: "abc",
  };
  return (
    <PRODUCT_CONTEXT.Provider value={values}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
