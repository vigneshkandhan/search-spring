import "./style.scss";
import ReactStars from "react-stars";

export const Stars = (props) => {
  return (
    <div className="stars flex items-center ">
      <ReactStars {...props} /> <span className="rating">{props.rating}</span>
    </div>
  );
};
