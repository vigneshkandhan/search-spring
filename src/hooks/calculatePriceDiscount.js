import { useDispatch, useSelector } from "react-redux";
import { getPriceDiscountAction } from "../store/actions/pricingAction";

//hooks to calculate price exclusive
export default function useCalculatePriceDiscount() {
  const products = useSelector((state) => state.products);
  const selectedProducts = products && products.selectedProductsList;

  const dispath = useDispatch();

  const priceDiscount = () => {
    if (selectedProducts && selectedProducts.length > 0) {
      let getPriceDiscount = 0;

      selectedProducts.map((data) => {
        if (data.discounted_price)
          getPriceDiscount =
            parseFloat(data.discounted_price) + parseFloat(getPriceDiscount);
      });

      dispath(getPriceDiscountAction(getPriceDiscount.toFixed(2)));
    } else {
      dispath(getPriceDiscountAction(0));
    }
  };

  return { priceDiscount };
}
