import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProductListAction,
  updateSelectedProductListAction,
  selectedProductAction,
} from "../store/actions/productAction";

//hooks to maintain list of selected products
export default function useSelectedProduct() {
  const products = useSelector((state) => state.products);
  const [getSelectedProductList, setSelectedProductList] = useState();
  const dispath = useDispatch();

  useEffect(() => {
    setSelectedProductList(products.selectedProductsList);
  }, [products]);

  const selectedProductList = (data, flag) => {
    dispath(selectedProductAction(data));
    if (flag) {
      dispath(selectedProductListAction(data));
    } else {
      if (getSelectedProductList && getSelectedProductList.length) {
        let productList = products;
        const cloneArr = [...productList.selectedProductsList];
        cloneArr.splice(
          cloneArr.findIndex(({ id }) => id == data.id),
          1
        );
        setSelectedProductList(cloneArr);

        dispath(updateSelectedProductListAction(cloneArr));
      }
    }
  };

  return { selectedProductList };
}
