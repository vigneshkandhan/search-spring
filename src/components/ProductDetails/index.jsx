import "./style.scss";
import { Stars } from "../Stars";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProductImage } from "./ProductImage";
import { ProductDetailPricing } from "./ProductDetailPricing";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const ProductDetail = ({ callback }) => {
  //selector
  const product = useSelector((state) => state.products);
  const [selectedProduct, setSelectedProduct] = useState(
    product.selectedProduct
  );

  useEffect(() => {
    setSelectedProduct(product.selectedProduct);
  }, [product]);

  return (
    <div className="product-detail product-padding">
      <div>
        <div className="header">
          Dobbs Corner Gaming Desk with Adjustable Monitor Stand
        </div>
        <Stars size={24} rating="3" />

        <div className="divider"></div>

        <div className="flex flex-center ">
          <div className="content">
            <Tabs className={"product-tabs"}>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Description</Tab>
              </TabList>
              <TabPanel>
                {selectedProduct && selectedProduct.images && (
                  <ProductImage data={selectedProduct} />
                )}
              </TabPanel>
              <TabPanel>
                The Dobbs Corner Gaming Desk with Adjustable Monitor Stand is a
                fantastic option for making the most out of your space.Featuring
                an L-shaped design, this desk provides ample space for your
                devices and other gaming essentials and comes with a headphone
                hook and a cup holder provides a clutter-free space.The K shaped
                metal frame ensures strength and the particleboard worktop
                features a carbon fibre texture for durability against everyday
                use.Complete with a 3 level adjustable monitor shelf, this L
                shaped gaming desk will offer you a practical and stylish set up
                to really immerse yourself in the game.. L shaped corner desk.
                Provides ample space for your devices and other gaming
                essentials. Headphone hook and a cup holder provides a
                clutter-free space. K shaped metal frame with particleboard
                worktops ensure strength and durability;. Carbon fibre texture
                on the table top for durability. Protective foot pads prevent
                your floor from damaged. Monitor shelf is 3 level adjustable.
                Cross panels of the frame for stability. Material:
                Particleboard, Metal;. Overall Dimension: 125L x 125W x 75H cm.
                Table top Size (3 section): 73W x 48D cm, 48W x 48D cm, 73W x
                48D cm. Table top Height: 75 cm. Monitor Shelf Height: 48W x 20D
                cm. Cup Holder Size: 6cm. Headphone Hook: 5L x 2W cm. Weight
                Capacity: 40kg (table top), 3kg (monitor shelf)*Self Assembly
                Required*Please note that this product is delivered direct from
                our supplier and may take a little longer to arrive
              </TabPanel>
            </Tabs>
          </div>
          <div className="content">
            {selectedProduct && (
              <ProductDetailPricing
                data={selectedProduct}
                callback={callback}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
