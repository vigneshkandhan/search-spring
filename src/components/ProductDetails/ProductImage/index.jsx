import "./style.scss";
import InnerImageZoom from "react-inner-image-zoom";
import { Table_1, Table_Zoom_1 } from "../../Images";
import { useState } from "react";

export const ProductImage = ({ data }) => {
  const [image, setImage] = useState(data.thumbnailImg);
  const [zoomImage, setZoomImage] = useState(data.zoom_images[0]);

  const onClickImage = (e, img, index) => {
    setImage(img);
    setZoomImage(data.zoom_images[index]);
    var elems = document.querySelectorAll(".image-thumbnail");

    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    const target = e.target;
    const parent = target.parentElement;
    parent.classList.add("active");
  };

  return (
    <div className="product-image flex content-center flex-col">
      <div className="image-content">
        <InnerImageZoom
          src={image}
          zoomSrc={zoomImage}
          width={"382px"}
          height={"382px"}
        />
      </div>
      <div className="flex flex-row">
        {data.images.map((data, key) => {
          return (
            <div
              className={`image-thumbnail ${key === 0 ? "active" : ""}`}
              onClick={(e) => onClickImage(e, data, key)}
            >
              <img src={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
