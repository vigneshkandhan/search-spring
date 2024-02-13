import "./style.scss";

export const Badge = (props) => {
  return props.type === "label" ? (
    <span className={`badge-label flex flex-center ${props.color}`}>
      {props.text}
    </span>
  ) : (
    <span className="badge flex flex-center">Save £27.00 </span>
  );
};
