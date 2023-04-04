import React from "react";
import style from "../../style/Slide/Slide2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import slide4 from "../../utils/slide4";

export default function Slide() {
  const nextImage = () => {
    setImageCurrent(currentImage === 0 ? amount - 1 : currentImage - 1);
  };

  const backImage = () => {
    setImageCurrent(currentImage === amount - 1 ? 0 : currentImage + 1);
  };

  const [currentImage, setImageCurrent] = React.useState(0);

  const amount = slide4.length;

  if (!Array.isArray(slide4) || amount === 0)
    return (
      <div>
        <p>Sin info</p>
      </div>
    );

  return (
    <div className={style.center}>
      <section className={style.header}>
        <div className={style.carusel_cont}>
          <button onClick={backImage} className={style.btn}>
            {" "}
            <FontAwesomeIcon icon={faChevronLeft} className={style.right} />
          </button>

          <div className={style["img_carusel_cont"]}>
            {slide4 &&
              slide4.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className={style["img-container"] + " " + style["fade"]}
                  >
                    {currentImage === index && (
                      <Link to={`/watch/${elem.id}`}>
                        <img key={index} src={elem.image} alt="img" />
                      </Link>
                    )}
                  </div>
                );
              })}
          </div>
          

          <button onClick={nextImage} className={style["btn"]}>
            {" "}
            <FontAwesomeIcon icon={faChevronRight} />{" "}
          </button>
        </div>
      </section>
    </div>
  );
}