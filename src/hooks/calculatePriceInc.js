import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProductAction,
  updateSelectedProductAction,
} from "../store/actions/productAction";
import { getPriceIncAction } from "../store/actions/pricingAction";

//hooks to maintain list of selected products
export default function useCalculatePriceInc() {
  const products = useSelector((state) => state.products);
  const selectedProducts = products && products.selectedProductsList;

  const dispath = useDispatch();

  const priceInc = () => {
    if (selectedProducts && selectedProducts.length > 0) {
      let getPriceInc = 0;

      selectedProducts.map((data) => {
        getPriceInc = parseFloat(data.price_inc) + parseFloat(getPriceInc);
      });

      dispath(getPriceIncAction(getPriceInc.toFixed(2)));
    } else {
      dispath(getPriceIncAction(0));
    }
  };

  return { priceInc };
}
