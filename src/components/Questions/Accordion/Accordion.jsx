import React, { useState } from "react";
import style from "../../../style/Accordion/Accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ heading, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className={style["accordion-item"]}>
      <div
        className={style["accordion-toggle"]}
        onClick={() => setIsActive(!isActive)}
      >
        <h3>{heading}</h3>
        <span>{isActive ? <FontAwesomeIcon icon={faChevronUp} className={style["arrow"]} /> : <FontAwesomeIcon icon={faChevronDown} className={style["arrow"]} />}</span>
      </div>
      {isActive && <div className={style["accordion-content"]}>{content}</div>}
    </li>
  );
}
