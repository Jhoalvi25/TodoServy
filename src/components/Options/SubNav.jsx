import style from "../../style/Options/SubNav.module.css";
import { Link } from "react-router-dom";

export default function SubNav() {
  return (
    <div className={style["container"]}>
      <div className={style["options"]}>
        <Link to="/services" className={style["link-left"]}>
          Busco un servicio
        </Link>

        <Link to="/business" className={style["link-mid"]}>
          Soy un Negocio
        </Link>

        <Link to="/profesional" className={style["link-rigth"]}>
          Soy un Profesional
        </Link>
      </div>
    </div>
  );
}
