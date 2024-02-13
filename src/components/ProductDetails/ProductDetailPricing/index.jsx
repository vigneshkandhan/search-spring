import "./style.scss";
import { Stars } from "../../Stars";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProductOverview } from "../ProductImage";
import { Pricing } from "../../Pricing/Pricing";
import { ProductColors } from "../../ProductColors";
import { Quantity } from "../../Quantity";
import { DiscountPrice } from "../../DiscsountPrice";
import { PriceIncTax } from "../../PriceIncTax";
import { PriceExTax } from "../../PriceExTax";
import { Badge } from "../../Badge";
import { useEffect, useState } from "react";

export const ProductDetailPricing = ({ data, callback }) => {
  const [colors, setColors] = useState("");
  const updateColors = (colors) => {
    setColors(colors);
  };
  useEffect(() => {
    if (data.colors) {
      setColors(data.colors[0]);
    }
  }, [data.colors]);
  return (
    <div className="product-detail-pricing">
      <DiscountPrice price={data.discounted_price} />
      <PriceIncTax price={data.price_inc} />
      <PriceExTax price={data.price_ex} />
      <Badge />
      {data.colors && <div className="pricing-divider"></div>}
      {data.colors && <div className="selected-color">Colour: {colors}</div>}
      <div className="flex column-gap-10 flex-row">
        {data.colors &&
          data.colors.map((data, i) => {
            return (
              <ProductColors
                type="round"
                colours={data}
                value={i == 0 ? true : false}
                callBack={(colors) => updateColors(colors)}
              />
            );
          })}
      </div>

      <div className="pricing-divider"></div>
      <Quantity id={data.id} />

      <button className="app-btn update-btn" onClick={() => callback()}>
        Update
      </button>
    </div>
  );
};
