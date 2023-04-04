import { useState } from "react";
import style from "../../style/NavBar/Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={style["explore"]}>
      <button onClick={toggleMenu} className={style["button-dropdown"]}>
        <h6 className={style["h4-dropdown"]}>Más de TodoServy</h6>
        <FontAwesomeIcon icon={faCaretDown} className={style["down"]} />
      </button>
      <nav
        className={
          style["nav-dropdown"] + " " + style[`${menu ? "isActive" : ""}`]
        }
      >
        <ul className={style["ul-dropdown"]}>
          <Link onClick={toggleMenu} className={style["a-dropdown"]} to="/animes/trending">
            <li className={style["li-dropdown"]}>
              <span>¿Que es TodoServy?</span>
            </li>
          </Link>
          <Link onClick={toggleMenu} className={style["a-dropdown"]} to="/animes/newest">
            <li className={style["li-dropdown"]}>
              <span>Hazte <span className={style["prem"]}>Premium</span></span>
            </li>
          </Link>
          <Link onClick={toggleMenu} className={style["a-dropdown"]} to="/animes">
            <li className={style["li-dropdown"]}>
              <span>Contactanos</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
