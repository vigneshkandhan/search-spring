import { useEffect, useState } from "react";
import { Badge } from "../Badge";
import { DiscountPrice } from "../DiscsountPrice";
import { PriceExTax } from "../PriceExTax";
import { PriceIncTax } from "../PriceIncTax";
import ReactSlidingPane from "react-sliding-pane";
import "./style.scss";
import { BasketItems } from "../BasketItems";
import { CustomerAlsoBought } from "../CustomerAlsoBought";
import { useSelector } from "react-redux";
import useCalculatePriceInc from "../../hooks/calculatePriceInc";
import useCalculatePriceEx from "../../hooks/calculatePriceEx";
import useCalculatePriceDiscount from "../../hooks/calculatePriceDiscount";

export const Pricing = (props) => {
  const pricing = useSelector((state) => state.price);
  const products = useSelector((state) => state.products);
  const { priceInc } = useCalculatePriceInc();
  const { priceEx } = useCalculatePriceEx();
  const { priceDiscount } = useCalculatePriceDiscount();

  const [state, setState] = useState({
    isPaneOpen: false,
    // priceInc: pricing.price_inc,
    // priceEx: pricing.price_ex,
    // priceDiscount: pricing.price_discount,
  });

  useEffect(() => {
    priceInc();
    priceEx();
    priceDiscount();
  }, [products]);

  useEffect(() => {
    setState({
      priceInc: pricing.price_inc,
      priceEx: pricing.price_ex,
      priceDiscount: pricing.price_discount,
    });
  }, [pricing]);

  return (
    <div className="pricing-content flex  flex-col">
      <div className="items-added">
        {products.selectedProductsList.length} Items added
      </div>
      <div className="pricing-header">Total bundle price</div>
      <DiscountPrice price={pricing.price_discount} />
      <PriceIncTax size="large" price={pricing.price_inc} />
      <div className="flex items-center flex-start">
        <PriceExTax size="large" price={pricing.price_ex} /> <Badge />
      </div>
      <button
        onClick={() => setState({ isPaneOpen: !state.isPaneOpen })}
        className="app-btn"
      >
        Add all {products.selectedProductsList.length} to Basket
      </button>

      <ReactSlidingPane
        className="pricing-sidebar"
        overlayClassName="pricing-sidebar-content"
        isOpen={state.isPaneOpen}
        width="600px"
        hideHeader
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <BasketItems />
        <CustomerAlsoBought />
      </ReactSlidingPane>
    </div>
  );
};
