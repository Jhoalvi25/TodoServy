import style from "../../../style/Options/Profesional/Profesional.module.css";
import { Link } from "react-router-dom";
import dispositive from "../../../img/image/Profesional/mockup_profesional_dispositivos 1.png";
import Slide3 from "../../Slide/Slide3";
import Slide4 from "../../Slide/Slide4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faChevronRight,
  faChevronDown,
  faUsers,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import BenefitCard from "../../BenefitCard/BenefitCard";
import Questions from "../../Questions/Questions";

export default function Profesional() {
  return (
    <div className={style["content-profesional"]}>
      <h1 className={style["title"]}>
        TodoServy <br /> Directorio Premium Online
      </h1>

      <p className={style["descrip"]}>
        Si eres profesional o independiente, ofrece tus servicios y muestra tus
        reseñas y calificaciones, garantiza pagos seguros y{" "}
        <span className={style["canal"]}>gana popularidad en tu ciudad.</span>
      </p>

      <br />

      <button className={style["register-btn"]}>
        <Link to={"/register"} className={style["btn-reg"]}>
          ¡Crea tu perfil Profesional/Independiente gratis!
        </Link>
      </button>

      <Slide3 />

      <h2 className={style["title-2"]}>
        <span className={style["todo-servy"]}>TodoServy </span> es visibilidad y
        confianza <br /> frente a tus clientes
      </h2>

      <div className={style["section-2"]}>
        <div className={style["information-2"]}>
          <h3 className={style["subtitle"]}>TodoServy Web</h3>

          <p className={style["parr-1"]}>
            Todas las reseñas y comentarios de la web unificadas sobre ti, como
            profesional en TodoServy.
          </p>
          <p className={style["parr-2"]}>
            Tus clientes podrán encontrar todos los servicios que ofreces y ver
            las calificaciones en tu perfil.
          </p>

          <Link to={"/see"}>
            <p className={style["see"]}>
              Mira como crear tu perfil profesional{" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </Link>
          <br />

          <h4 className={style["subtitle-2"]}>
            {" "}
            <FontAwesomeIcon icon={faShield} className={style["shield"]} />
            Inspiramos confianza
          </h4>

          <p className={style["parr-2"]}>
            En TodoServy validamos tus licencias, diplomas y credenciales para
            dar más confianza a los usuarios.
          </p>

          <p className={style["parr-2"]}>
            Toda la información en nuestra plataforma universal y unificada
            serán un motivo de confianza para que tus clientes agenden tus
            servicios.
          </p>
          <br />
        </div>

        <div className={style["image-2"]}>
          <div className={style["image-uno"]}>
            <img src={dispositive} alt="" className={style["uno"]} />
          </div>
        </div>
      </div>

      <div className={style["section-3"]}>
        <div className={style["container-1"]}>
          <h3 className={style["title-todo1"]}>TodoServy es Universal</h3>
          <p className={style["text-info"]}>
            En TodoServy, puedes ofrecer una amplia variedad de servicios si
            eres un profesional o independiente en tu ciudad.
          </p>
          <p className={style["text-info2"]}>
            Puedes ofrecer cualquier servicio, no importa si es de barbería,
            como entrenador personal, mecánico de carros, médico particular o
            cualquier otro, en TodoServy lo puedes hacer.
          </p>
          <p className={style["text-info2"]}>
            Nuestra plataforma es universal, lo que significa que no está
            limitada a una sola área geográfica o industria específica.
          </p>
          <p className={style["text-info2"]}>
            Además, al tener todos los servicios en un solo lugar, tus clientes
            podrán comparar fácilmente precios y calidad antes de tomar una
            decisión, asegurándose de obtener el mejor profesional.
          </p>
          <p className={style["text-info2"]}>
            ¡Únete a TodoServy hoy mismo y ofrece tus servicios con facilidad y
            rapidez!
          </p>

          <p className={style["letter"]}>
            Conoce más aquí
            <FontAwesomeIcon icon={faChevronDown} className={style["down"]} />
          </p>
        </div>
        <div className={style["container-2"]}>
          <h3 className={style["title-todo1"]}>TodoServy es Universal</h3>
          <p className={style["text-info"]}>
            En TodoServy, contamos con una sección de reseñas y valoraciones en
            la que puedes mostrar a todos los comentarios y opiniones que se
            encuentran en internet sobre tus servicios registrados en la
            plataforma.
          </p>
          <p className={style["text-info2"]}>
            Esto brinda una visión completa y precisa de la reputación y calidad
            de lo que ofreces, lo que permite a tus clientes ver que eres
            confiable y que tienes experiencia para brindarle un servicio de
            calidad.
          </p>

          <p className={style["letter"]}>
            Conoce más aquí
            <FontAwesomeIcon icon={faChevronDown} className={style["down"]} />
          </p>
        </div>
      </div>
      <div className={style["section-4"]}>
        <h2 className={style["agend"]}>
          Agendamiento <br /> revolucionario online
        </h2>

        <p className={style["text-agend"]}>
          TodoServy está optimizado para que puedas ofrecer una opción de
          agendamiento en línea, de esta forma tus clientes pueden conocer tu
          disponibilidad y agendar tus servicios de manera efectiva.
        </p>

        <p className={style["text-black"]}>
          ¡Puedes incluir más de un tipo de servicio en tu perfil profesional!
          No tienes límites
        </p>
        <p className={style["text-agend"]}>
          Recuerda que, si eres “Profesional Free”, tienes un límite de
          agendamientos sobre tus servicios, pero si te haces “Profesional
          Premium” la cantidad de agendamientos será ilimitada.
        </p>

        <Slide4 />
      </div>
      <div className={style["section-5"]}>
        <div className={style["sub-section1"]}>
          <p className={style["calendar"]}>
            {" "}
            <FontAwesomeIcon icon={faUsers} className={style["icon-section"]} />
          </p>

          <h3 className={style["section-title"]}>
            Todos los servicios a la mano
          </h3>
          <p className={style["text-info5"]}>
            Ofrece los servicios que quieras y los usuarios te encontrarán.
          </p>
          <p className={style["text-info5"]}>
            Si eres independiente, jardinero, plomero, abogado, médico o de
            cualquier otra profesión, TodoServy es para ti.
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

          <p className={style["text-info5"]}>
            Los pagos de tus clientes nunca fueron más seguros. ¡Todos los
            medios disponibles!
          </p>

          <p className={style["text-info5"]}>
            Efectivo, transferencias bancarias o tarjetas de crédito y débito.
          </p>
        </div>
      </div>

      <BenefitCard />

      <Questions />
    </div>
  );
}
