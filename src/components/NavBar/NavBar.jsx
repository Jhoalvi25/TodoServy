import style from "../../style/NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/Logo/logo_todoservy.png";
import Dropdown from "./DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className={style["nav"]}>
      <div className={style["nav-content"]}>
        <div className={style["elements"]}>
          <button className={style["btn-bar"]}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={style["logo-img"]}>
            <Link to={"/"}>
              <img src={logo} alt="img" className={style["logo"]} />
            </Link>
          </div>
          <div className={style["options"]}>
            <ul>
              <li className={style["option"]}>
                <Link to={"/business"} className={style["links"]}>
                  Inscribe tu Negocio
                </Link>
              </li>
              <li className={style["option"]}>
                <Link to={"/profesional"} className={style["links"]}>
                  Hazte Profesional
                </Link>
              </li>
              <li className={style["option"]}>
                <Dropdown />
              </li>
              <li className={style["option"]}>
                <Link to={"/blog"} className={style["link-blog"]}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className={style["login-register"]}>
            <Link to={"/login"} className={style["register"]}>
              Registrate
            </Link>
            <Link to={"/register"} className={style["login"]}>
              Inicio Sesion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
