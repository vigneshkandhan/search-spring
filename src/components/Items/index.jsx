import "./style.scss";
import Table from "../../assets/images/table/table_1.svg";
import ReactStars from "react-stars";
import { DiscountPrice } from "../DiscsountPrice";
import { PriceIncTax } from "../PriceIncTax";
import { PriceExTax } from "../PriceExTax";
import { Quantity } from "../Quantity";
import { Modal } from "react-responsive-modal";
import { useEffect, useRef, useState } from "react";
import { Badge } from "../Badge";
import { ProductDetail } from "../ProductDetails";
import { Stars } from "../Stars";
import { ProductColors } from "../ProductColors";
import { useDispatch } from "react-redux";
import selectedProduct from "../../hooks/selectedProduct";
import useSelectedProduct from "../../hooks/selectedProduct";
import { selectedProductAction } from "../../store/actions/productAction";

export const Items = ({ data, checkbox = true }) => {
  const dispatch = useDispatch();
  //state
  const [modal, setModal] = useState(false);
  const [checkboxCheck, setCheckboxCheck] = useState(false);
  const [productData, setProductData] = useState();
  //customHooks
  const { selectedProductList } = useSelectedProduct();
  //ref
  const checkboxRef = useRef();

  const openModal = (data) => {
    if (checkbox) {
      setModal(true);
      dispatch(selectedProductAction(data));
    }
  };

  const checkboxClick = (e) => {
    e.stopPropagation();
    // checkboxRef.current.click();
  };

  const checkBoxOnChange = (data) => {
    setCheckboxCheck(!checkboxCheck);
    setProductData(data);
  };

  useEffect(() => {
    checkbox && selectedProductList(productData, checkboxCheck);
  }, [checkboxCheck]);

  return (
    <>
      {data && (
        <div className="items" onClick={() => openModal(data)}>
          <div className="item-badge">
            {data.tag && (
              <Badge type="label" color={data.tag.color} text={data.tag.text} />
            )}
          </div>
          {checkbox && (
            <div className="checkbox flex flex-center" onClick={checkboxClick}>
              <input
                className="checkbox"
                ref={checkboxRef}
                checked={checkboxCheck}
                type="checkbox"
                onChange={() => checkBoxOnChange(data)}
              />
            </div>
          )}
          <img className="full-width" src={data.thumbnailImg} />
          <Stars
            size={"24"}
            edit={false}
            value={data.rating}
            rating={data.rating}
          />
          <div className="desc">
            <span className="bold">This Item: </span>Dobbs Corner Gaming Desk
            with Adjustable Monitor...
          </div>
          <DiscountPrice price={data.discounted_price} />
          <PriceIncTax price={data.price_inc} />
          <PriceExTax price={data.price_ex} />
          {data.selectedColor && <ProductColors colours={data.selectedColor} />}
          {data.showQuantity && <Quantity id={data.id} />}
        </div>
      )}
      <Modal
        classNames={{ root: "product-modal" }}
        open={modal}
        center={true}
        onClose={() => setModal(false)}
      >
        <ProductDetail callback={() => setModal(false)} />
      </Modal>
    </>
  );
};
