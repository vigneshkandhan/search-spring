import products from "../../../data/products";
import {
  GET_PRODUCTS,
  SELECTED_PRODUCT,
  SELECTED_PRODUCT_LIST,
  UPDATE_SELECTED_PRODUCT,
  QUANTITY_PRODUCT,
} from "../../types/productActionTypes";

const initialState = {
  currentProduct: products.current,
  suggestProducts: products.suggestion,
  selectedProductsList: [],
  selectedProduct: {},
  quantity: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        currentProduct: [...state.currentProduct],
        suggestProducts: state.suggestProducts,
      };
    case SELECTED_PRODUCT_LIST:
      return {
        ...state,
        selectedProductsList: state.selectedProductsList.concat(action.payload),
      };
    case UPDATE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProductsList: action.payload,
      };
    case SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    case QUANTITY_PRODUCT:
      return {
        ...state,
        quantity: {
          ...state.quantity,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default ProductReducer;
