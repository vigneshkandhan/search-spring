import { useEffect, useState } from "react";
import { Badge } from "../Badge";
import { DiscountPrice } from "../DiscsountPrice";
import { Chair_green_1, Chair_red_1, Table_1, Tick } from "../Images";
import { PriceExTax } from "../PriceExTax";
import { PriceIncTax } from "../PriceIncTax";
import "./style.scss";
import { useSelector } from "react-redux";

export const BasketItems = (props) => {
  const pricing = useSelector((state) => state.price);
  const products = useSelector((state) => state.products);
  const [state, setState] = useState({
    priceInc: pricing.price_inc,
    priceEx: pricing.price_ex,
    priceDiscount: pricing.price_discount,
  });

  // useEffect(() => {
  //   setState({
  //     priceInc: pricing.price_inc,
  //     priceEx: pricing.price_ex,
  //     priceDiscount: pricing.price_discount,
  //   });
  // }, [pricing]);

  return (
    <div className="basket-items">
      <div className="content flex items-center">
        <img src={Tick} /> <span>Just added to your Basket</span>
      </div>
      <div className="basket-image flex">
        {products.selectedProductsList.map((data) => {
          return (
            <div className="block">
              <img src={data.thumbnailImg} />
            </div>
          );
        })}
      </div>
      <div className="basket-total flex flex-row items-center">
        <div className="sub-total">SubTotal</div>
        <div className="pricing-block flex flex-col">
          <div className="flex flex-row block-1">
            <DiscountPrice price={state.priceDiscount} />
            <PriceIncTax price={state.priceInc} />
          </div>
          <div className="flex flex-row block-2">
            <PriceExTax price={state.priceEx} />
            <Badge text="Save 27" />
          </div>
        </div>
      </div>

      <div className="flex flex-row btn-grp">
        <button className="app-btn btn-2">Continue shopping</button>
        <button className="app-btn">View Basket</button>
      </div>
    </div>
  );
};
