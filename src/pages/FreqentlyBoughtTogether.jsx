import { Center } from "../components/Center";
import { Items } from "../components/Items";
import Slider from "react-slick";
import { Pricing } from "../components/Pricing/Pricing";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const FreqentlyBoughtTogether = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const products = useSelector((state) => state.products);
  let suggestProducts = [...products.suggestProducts];

  return (
    <Center>
      <div className="frequent-layout">
        <div className="content">
          <div className="header">Frequently Bought Together</div>
          <div className="flex flex-row">
            <Items data={products.currentProduct} />

            <div className="plus flex flex-center">+</div>
            <div className="slider">
              <Slider {...settings}>
                {suggestProducts &&
                  suggestProducts.map((data) => {
                    return (
                      <div>
                        <Items data={data} click={false} />
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <Pricing />
          </div>
        </div>
      </div>
    </Center>
  );
};
