import { useEffect } from "react";
import { ChevronDown } from "../Images";
import "./style.scss";

export const ProductColors = ({ type, colours, callBack, value }) => {
  const coloursClick = (e) => {
    var elems = document.querySelectorAll(".round");

    [].forEach.call(elems, function (el) {
      el.classList.remove("outline");
    });
    const target = e.target;
    const parent_1 = target.parentElement;
    const parent_2 = parent_1.parentElement;

    parent_2.classList.add("outline");
    if (type === "round") callBack(colours);
  };

  const getClass = () => {
    if (type != "round" || value) {
      return "outline";
    }
  };

  return (
    <div
      className={`product-colors ${type !== "round" ? "colors" : ""}`}
      onClick={coloursClick}
    >
      <div className={`round ${getClass()}`}>
        <div className="inline-flex flex-center ">
          <div className={`round  ${colours}`}></div>{" "}
          {type !== "round" && <span>{colours}</span>}
        </div>
      </div>
      {type !== "round" && <img src={ChevronDown} />}
    </div>
  );
};
