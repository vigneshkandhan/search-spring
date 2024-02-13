import products from "../../../data/products";
import {
  GET_PRICE_INC,
  GET_PRICE_EX,
  GET_PRICE_DISCOUNT,
} from "../../types/pricingActionTypes";

const initialState = {
  price_inc: 0,
  price_ex: 0,
  price_discount: 0,
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRICE_INC:
      return {
        ...state,
        price_inc: action.payload,
      };

    case GET_PRICE_EX:
      return {
        ...state,
        price_ex: action.payload,
      };

    case GET_PRICE_DISCOUNT:
      return {
        ...state,
        price_discount: action.payload,
      };

    default:
      return state;
  }
};

export default priceReducer;
