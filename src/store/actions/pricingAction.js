import {
  GET_PRICE_DISCOUNT,
  GET_PRICE_EX,
  GET_PRICE_INC,
} from "../types/pricingActionTypes";

export const getPriceIncAction = (data) => {
  return {
    type: GET_PRICE_INC,
    payload: data,
  };
};

export const getPriceExAction = (data) => {
  return {
    type: GET_PRICE_EX,
    payload: data,
  };
};

export const getPriceDiscountAction = (data) => {
  return {
    type: GET_PRICE_DISCOUNT,
    payload: data,
  };
};

export const totalPriceIncAction = (data) => {
  return {
    type: GET_PRICE_INC,
    payload: data,
  };
};

export const totalPriceExAction = (data) => {
  return {
    type: GET_PRICE_EX,
    payload: data,
  };
};

export const totalPriceDiscountAction = (data) => {
  return {
    type: GET_PRICE_DISCOUNT,
    payload: data,
  };
};
