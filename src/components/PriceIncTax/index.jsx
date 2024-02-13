import "./style.scss";

export const PriceIncTax = (props) => {
  return (
    <div className={`price-inc-tax ${props.size ? "large" : ""}`}>
      <span>£{props.price}</span> inc VAT
    </div>
  );
};
