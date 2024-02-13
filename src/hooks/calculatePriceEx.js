import { useDispatch, useSelector } from "react-redux";
import { getPriceExAction } from "../store/actions/pricingAction";

//hooks to calculate price exclusive
export default function useCalculatePriceEx() {
  const products = useSelector((state) => state.products);
  const selectedProducts = products && products.selectedProductsList;

  const dispath = useDispatch();

  const priceEx = () => {
    if (selectedProducts && selectedProducts.length > 0) {
      let getPriceEx = 0;

      selectedProducts.map((data) => {
        getPriceEx = parseFloat(data.price_ex) + parseFloat(getPriceEx);
      });

      dispath(getPriceExAction(getPriceEx.toFixed(2)));
    } else {
      dispath(getPriceExAction(0));
    }
  };

  return { priceEx };
}
