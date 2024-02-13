import "./style.scss";

export const PriceExTax = (props) => {
  return (
    <div className={`price-ex-tax ${props.size ? "large" : ""}`}>
      £{props.price} ex VAT
    </div>
  );
};
