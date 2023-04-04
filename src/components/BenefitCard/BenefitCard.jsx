import style from "../../style/BenefitCard/BenefitCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function BenefitCard() {
  return (
    <div className={style["card"]}>
      <div className={style["card__content"]}>
        <FontAwesomeIcon icon={faCrown} className={style["crown"]} />

        <h2 className={style["title-card"]}>
          Obtén todos los beneficios <br />{" "}
          <span className={style["subt-card"]}>¡Únete a Premium!</span>
        </h2>

        <div className={style["info-card"]}>
          <div className={style["content-info"]}>
            <p>
              Si te registras como profesional o independiente y accedes a
              Premium, tu visibilidad aumentará significativamente: aparecerás
              en los primeros resultados dentro de TodoServy.
            </p>
          </div>
          <div className={style["content-info"]}>
            <p>
              Con tu perfil premium tendrás un identificador en tu nombre que
              demuestra que eres uno de los más calificados para ese servicio.
              Miles de usuarios están esperando para contratarte.
            </p>
          </div>
        </div>
      </div>

      <div className={style["benefit-list"]}>
        <p className={style["list"]}>
          {" "}
          <FontAwesomeIcon icon={faPlus} className={style["plus"]} />
          Verificación de credenciales, licencias y diplomas
        </p>
        <p className={style["list"]}>
          <FontAwesomeIcon icon={faPlus} className={style["plus"]} />
          Visibilidad premium
        </p>
        <p className={style["list"]}>
          <FontAwesomeIcon icon={faPlus} className={style["plus"]} />
          Ofertar servicios ilimitados
        </p>
        <p className={style["list"]}>
          <FontAwesomeIcon icon={faPlus} className={style["plus"]} />
          Botón que direcciona a WhatsApp
        </p>
        <p className={style["list"]}>
          <FontAwesomeIcon icon={faPlus} className={style["plus"]} />
          Acceso ilimitado al calendario y agendamiento online
        </p>
        <p className={style["list"]}>
          <FontAwesomeIcon icon={faPlus} className={style["plus"]} />
          Recibe pagos 100% seguros a través de TodoServy
        </p>
      </div>
      <br />

      <button className={style["pre"]}>
        <Link to={"/join"}>¡Únete a Premium!</Link>
      </button>
    </div>
  );
}
