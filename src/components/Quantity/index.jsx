import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "../Images";
import "./style.scss";
import { useEffect, useState } from "react";
import {
  getPriceDiscountAction,
  getPriceExAction,
  getPriceIncAction,
} from "../../store/actions/pricingAction";
import { toast } from "react-toastify";

export const Quantity = ({ id }) => {
  const products = useSelector((state) => state.products);
  const pricing = useSelector((state) => state.price);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const checkProductExist = () => {
    const exist = products.selectedProductsList.filter((data) => {
      if (data.id === id) {
        return data;
      }
    });
    return exist.length;
  };

  const decrement = (e) => {
    e.stopPropagation();
    if (checkProductExist()) {
      let temp = quantity - 1;
      if (temp === 0) {
        setQuantity(1);
      } else {
        setQuantity(quantity - 1);
      }
    } else {
      toast.error("Please Add Item to the basket !", {
        theme: "colored",
        position: "top-center",
      });
    }
  };

  const increment = (e) => {
    e.stopPropagation();
    if (checkProductExist()) {
      setQuantity(quantity + 1);
    } else {
      toast.error("Please Add Item to the basket !", {
        theme: "colored",
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (checkProductExist()) {
      if (quantity > 1) {
        const priceInc = parseFloat(
          (products.selectedProduct.price_inc * quantity).toFixed(2)
        );
        const priceEx = parseFloat(
          (products.selectedProduct.price_ex * quantity).toFixed(2)
        );

        if (products.selectedProduct.discounted_price) {
          const priceDiscount = parseFloat(
            (products.selectedProduct.discounted_price * quantity).toFixed(2)
          );
          priceDiscount &&
            dispatch(getPriceDiscountAction(priceDiscount.toFixed(2)));
        }

        dispatch(getPriceExAction(priceEx.toFixed(2)));
        dispatch(getPriceIncAction(priceInc.toFixed(2)));
      } else {
        dispatch(getPriceExAction(products.selectedProduct.price_ex));
        dispatch(getPriceIncAction(products.selectedProduct.price_inc));
        dispatch(
          getPriceDiscountAction(
            products.selectedProduct.price_discounted_price
          )
        );
      }
    }
  }, [quantity]);

  return (
    <div className="quantity">
      <span className="operator" onClick={decrement}>
        <img src={Minus} />
      </span>
      <span>{quantity}</span>
      <span className="operator" onClick={increment}>
        <img src={Plus} />
      </span>
    </div>
  );
};
