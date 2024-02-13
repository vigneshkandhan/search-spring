import {
  SELECTED_PRODUCT,
  SELECTED_PRODUCT_LIST,
  UPDATE_SELECTED_PRODUCT,
  MUTUATE_SELECTED_PRODUCT,
  UPDATE_PRODUCT,
  QUANTITY_PRODUCT,
} from "../types/productActionTypes";

export const selectedProductListAction = (data) => {
  return {
    type: SELECTED_PRODUCT_LIST,
    payload: data,
  };
};

export const updateSelectedProductListAction = (data) => {
  return {
    type: UPDATE_SELECTED_PRODUCT,
    payload: data,
  };
};

export const updateProducts = (data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
};

export const selectedProductAction = (data) => {
  return {
    type: SELECTED_PRODUCT,
    payload: data,
  };
};

export const quantityProductAction = (data) => {
  return {
    type: QUANTITY_PRODUCT,
    payload: data,
  };
};
