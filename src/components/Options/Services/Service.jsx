import style from "../../../style/Options/Services/Services.module.css";
import img1 from "../../../img/image/mockup_plataforma01 2.png";
import img2 from "../../../img/image/perfil_pofesional01 2.png";
import img3 from "../../../img/image/perfil_pofesional02 1.png";
import img4 from "../../../img/image/perfil_negocio01 1.png";
import img5 from "../../../img/image/image 3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faChevronDown,
  faCalendarDay,
  faUsers,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Questions from "../../Questions/Questions";

export default function Service() {
  return (
    <div className={style["content-services"]}>
      <h1 className={style["title"]}>
        TodoServy <br /> Directorio Premium Online
      </h1>

      <div className={style["responsive-info"]}>
        <p className={style["descrip"]}>
          Busca, compara, reserva y paga de forma segura todos los servicios de
          profesionales, independientes y negocios aquí.
        </p>

        <button className={style["register-btn"]}>
          <Link to={"/register"} className={style["btn-reg"]}>
            Registrate
          </Link>{" "}
        </button>

        <div className={style["img-content"]}>
          <img src={img1} alt="" className={style["img-1"]} />
        </div>
      </div>

      <h2 className={style["title-2"]}>
        <span className={style["todo-servy"]}>TodoServy </span> para que
        encuentres <br /> el servicio que necesitas
      </h2>

      <div className={style["section-2"]}>
        <div className={style["information-2"]}>
          <h3 className={style["subtitle"]}>TodoServy Web</h3>

          <p className={style["parr-1"]}>
            La plataforma Universal donde podrás encontrar <br /> todos los
            servicios sin importar la categoría o industria.
          </p>
          <p className={style["parr-2"]}>
            Encuentra todas las reseñas y comentarios unificados sobre un
            profesional, independiente, negocio o emprendimiento digital en
            TodoServy.
          </p>
          <br />

          <h4 className={style["subtitle-2"]}>
            {" "}
            <FontAwesomeIcon icon={faShield} className={style["shield"]} />
            Inspiramos confianza
          </h4>

          <p className={style["parr-2"]}>
            TodoServy realiza una verificación de credenciales, licencias y
            diplomas para garantizar la calidad, la experiencia y el
            conocimiento de los negocios, profesionales e independientes.
          </p>
          <br />
          <p className={style["secure"]}>Tu servicio está garantizado.</p>
        </div>

        <div className={style["image-2"]}>
          <div className={style["image-uno"]}>
            {" "}
            <img src={img2} alt="" className={style["uno"]} />
          </div>
          <div className={style["image-dos"]}>
            {" "}
            <img src={img4} alt="" className={style["dos"]} />
          </div>
          <div className={style["image-tres"]}>
            <img src={img3} alt="" className={style["tres"]} />
          </div>
        </div>
      </div>
      <div className={style["section-3"]}>
        <div className={style["container-1"]}>
          <h3 className={style["title-todo1"]}>TodoServy es Universal</h3>
          <p className={style["text-info"]}>
            En TodoServy, tienes acceso a todos los servicios que ofrecen <br />
            profesionales, independientes, negocios y empresas en <br />
            tu ciudad.
          </p>
          <p className={style["text-info2"]}>
            Esto significa que, no importa qué servicio necesites, desde
            reparaciones en el hogar hasta peluquerías caninas, todo está
            disponible en TodoServy.
          </p>
          <p className={style["text-info2"]}>
            TodoServy es universal, quiere decir que no solo se limita a una
            cierta área geográfica o una industria específica, sino que abarca
            todos los servicios disponibles en tu ciudad.
          </p>
          <p className={style["text-info2"]}>
            Al tener todos los servicios disponibles en un solo lugar, también
            puedes comparar fácilmente precios y calidad de servicio antes de
            tomar una decisión.
          </p>
          <p className={style["letter"]}>
            Conoce más aquí{" "}
            <FontAwesomeIcon icon={faChevronDown} className={style["down"]} />
          </p>{" "}
        </div>
        <div className={style["container-2"]}>
          <h3 className={style["title-todo1"]}>TodoServy es Universal</h3>
          <p className={style["text-info"]}>
            En TodoServy encuentras todas las reseñas y valoraciones que <br />
            están en internet sobre cada profesional, independiente y <br />{" "}
            negocio registrado.
          </p>
          <p className={style["text-info2"]}>
            Al tener acceso a estas reseñas, puedes tomar una decisión acertada
            sobre a quién contratar.
          </p>
          <p className={style["text-info2"]}>
            No pierdas tiempo buscando reseñas en diferentes sitios web, todo
            está unificado en TodoServy.
          </p>
          <p className={style["letter"]}>
            Conoce más aquí{" "}
            <FontAwesomeIcon icon={faChevronDown} className={style["down"]} />
          </p>{" "}
        </div>
      </div>
      <div className={style["section-4"]}>
        <div className={style["sub-section1"]}>
          <p className={style["calendar"]}>
            {" "}
            <FontAwesomeIcon
              icon={faCalendarDay}
              className={style["icon-section"]}
            />
          </p>

          <h3 className={style["section-title"]}>
            Agendamiento en línea revolucionario
          </h3>
          <p className={style["text-info"]}>
            Cuentas con un calendario revolucionario online para agendar el
            servicio que deseas sin intermediarios. Revisas la disponibilidad
            del profesional, independiente o el negocio y agendas tu servicio.
          </p>
        </div>
        <div className={style["sub-section1"]}>
          <p className={style["calendar"]}>
            {" "}
            <FontAwesomeIcon icon={faUsers} className={style["icon-section"]} />
          </p>

          <h3 className={style["section-title"]}>
            Todos los servicios a la mano
          </h3>
          <p className={style["text-info"]}>
            Encuentra en TodoServy los servicios comunes, como jardinería,
            plomería, veterinaria, electricista, y los menos comunes; como
            masajes relajantes, empresas de seguridad y más.
          </p>
        </div>
        <div className={style["sub-section1"]}>
          <p className={style["calendar"]}>
            {" "}
            <FontAwesomeIcon
              icon={faMoneyCheckDollar}
              className={style["icon-section"]}
            />
          </p>

          <h3 className={style["section-title"]}>Pagos 100% seguros</h3>
          <br />

          <p className={style["text-info"]}>
            Paga por los servicios contratados a través de una plataforma 100%
            online y segura. También puedes pagar en efectivo, transferencia
            bancaria y con tarjeta de crédito y débito.
          </p>
        </div>
      </div>
      <div className={style["section-5"]}>
        <div className={style["section5-img"]}>
          <img src={img5} alt="" className={style["img-5"]} />
        </div>
        <div className={style["section5-info"]}>
          <h2 className={style["title-5"]}>App Todoservy</h2>
          <p className={style["info-5"]}>
            Busca, agenda, paga y califica el servicio que <br /> necesitas
            desde la palma de tu mano, con la <br /> App TodoServy.​​
          </p>
          <p className={style["free"]}>¡Es 100% gratis!</p>
          <br />
          <button className={style["app"]}>
            <Link to={"/app"}>Descarga la App</Link>
          </button>
        </div>
      </div>

      <Questions />
    </div>
  );
}
