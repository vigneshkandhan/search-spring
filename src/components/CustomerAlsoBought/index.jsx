import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Items } from "../Items";
import "./style.scss";
import products from "../../data/products";

export const CustomerAlsoBought = (props) => {
  return (
    <div className="customer-also-bought">
      <div className="header">Customer Also Bought</div>
      <Tabs className={"product-tabs"}>
        <TabList>
          <Tab>Gaming Desk</Tab>
          <Tab>Gaming Chairs</Tab>
          <Tab>Gaming Headsets</Tab>
          <Tab>Gaming Mice & Keyboards</Tab>
        </TabList>
        <TabPanel>
          <div class="item-list flex-center">
            {products.customerAlsoBought.map((data) => {
              return (
                <div class="item">
                  <Items data={data} checkbox={false} />
                </div>
              );
            })}
          </div>{" "}
        </TabPanel>
      </Tabs>
    </div>
  );
};
