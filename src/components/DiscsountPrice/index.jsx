import "./style.scss";

export const DiscountPrice = ({ price }) => {
  return (
    <div className="price-block">
      <div className="discount">
        {price > 0 && (
          <>
            Was <span>£{price}</span>
          </>
        )}
      </div>
    </div>
  );
};
