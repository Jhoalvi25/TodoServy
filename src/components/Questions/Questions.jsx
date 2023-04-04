import React from "react";
import Accordion from "./Accordion/Accordion";
import { accordionData } from "./Accordion/accordionData";

import img from "../../img/image/Questions/5474231 1.png";
import img8 from "../../img/image/image 8.png"
import style from "../../style/Accordion/Questions/Questions.module.css";

export default function Questions() {
  return (
    <div className={style["question-content"]}>
      <h1 className={style["freq"]}>Preguntas Frecuentes</h1>

      <div className={style["content-cont"]}>
        <div className={style["content1"]}>
          <img src={img} alt="img" className={style["img-q"]} />
        </div>
        <div className={style["content2"]}>
          <ul className="accordion">
            {accordionData.map(({ heading, content }) => (
              <Accordion heading={heading} content={content} />
            ))}
          </ul>
        </div>
      </div>

      <div className={style["data-cont"]}>
        <div className={style["data-box1"]}>
          <h2 className={style["number"]}>+2.000</h2>
          <p className={style["info-text"]}>Negocios, Profesionales e independientes</p>
        </div>
        <div className={style["data-box"]} >
          <h2 className={style["number"]}>11</h2>
          <p className={style["info-text"]}>Ciudades en Ecuador</p>
        </div>
        <div className={style["data-box3"]} >
          <h2 className={style["number"]}>+120</h2>
          <p className={style["info-text"]}>Tipos de servicios disponibles</p>
        </div>
      </div>

      <div className={style["message-cont"]}>
        <div className={style["co-img"]}>
          <img src={img8} alt="img" className={style["co"]} />
        </div>
        <div className={style["message"]}>
          <p className={style["big"]}>"TodoServy está hecho para ayudar a <br /> encontrar el proveedor de servicios que <br /> necesitas, y a los profesionales a <br /> digitalizar su oferta de servicios, tener un <br /> mayor alcance de clientes y un nuevo <br /> canal de ventas."</p>
          <p className={style["name"]}>Juan Sarmiento</p>
          <p className={style["profesion"]}>President & Co-Founder</p>
        </div>

      </div>
    </div>
  );
}
