import React from "react";
import style from "../../style/Slide/Slide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import slide1 from "../../utils/slide1";

export default function Slide() {
  const nextImage = () => {
    setImageCurrent(currentImage === 0 ? amount - 1 : currentImage - 1);
  };

  const backImage = () => {
    setImageCurrent(currentImage === amount - 1 ? 0 : currentImage + 1);
  };

  const [currentImage, setImageCurrent] = React.useState(0);

  const amount = slide1.length;

  if (!Array.isArray(slide1) || amount === 0)
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
            {slide1 &&
              slide1.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className={style["img-container"] + " " + style["fade"]}
                  >
                    {currentImage === index && (
                      <Link to={`/services`}>
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
        <p className={style.descrip}>Tu perfil personalizado mostrando categorías, estudios, horarios, reseñas y mucho más</p>
      </section>
    </div>
  );
}
