import { Link } from "react-router-dom";
import style from "../../../style/Options/Business/Business.module.css";
import Slide from "../../Slide/Slide";
import Slide2 from "../../Slide/Slide2";
import BenefitCard from "../../BenefitCard/BenefitCard";
import Questions from "../../Questions/Questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faChevronDown,
  faChevronRight,
  faUsers,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import img2 from "../../../img/image/Bussines/perfil_negocio01 1.png";

export default function Business() {
  return (
    <div className={style["content-services"]}>
      <h1 className={style["title"]}>
        TodoServy <br /> Directorio Premium Online
      </h1>

      <div className={style["responsive-info"]}>
        <p className={style["descrip"]}>
          Ofrece los servicios de tu negocio, empresa o emprendimiento digital,
          muestra sus reseñas y calificaciones, garantiza pagos seguros y gana
          popularidad en tu ciudad.
        </p>
        <br />

        <span className={style["canal"]}>¡Tu nuevo canal de ventas!</span>
        <br />

        <button className={style["register-btn"]}>
          <Link to={"/register"} className={style["btn-reg"]}>
            ¡Registra tu negocio gratis!
          </Link>
        </button>
      </div>

      <Slide />

      <h2 className={style["title-2"]}>
        <span className={style["todo-servy"]}>TodoServy </span> para negocios,
        <br /> microempresas o negocio virtuales
      </h2>

      <div className={style["section-2"]}>
        <div className={style["image-2"]}>
          <img src={img2} alt="img" className={style["img-2"]} />
        </div>

        <div className={style["information-2"]}>
          <h3 className={style["subtitle"]}>
            Reclama tu Negocio <br /> ¡Es gratis!
          </h3>

          <p className={style["parr-1"]}>
            En TodoServy tenemos la misión de impulsar tu emprendimiento o
            empresa. Te ayudamos sin costo, solo tienes que reclamar tu negocio
            y te damos visibilidad frente a clientes potenciales.
            <br />
          </p>
          <p className={style["parr-2"]}>
            Sube fotos, videos y pide a tus clientes que comenten sobre los
            servicios del negocio y nosotros nos encargamos de hacerte visible.
          </p>

          <p className={style["parr-2"]}>
            Tendrás un perfil verificado que da presencia online y unificación
            de todas las valoraciones en una sola plataforma.
          </p>

          <p className={style["parr-2"]}>
            Regístra tu negocio gratis ahora y forma parte del Directorio
            Premium online revolucionario de Colombia.
          </p>
          <br />

          <Link to={"/video"}>
            <p className={style["video"]}>
              Ver video tutorial <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </Link>

          <h4 className={style["subtitle-2"]}>
            <FontAwesomeIcon icon={faShield} className={style["shield"]} />
            Inspiramos confianza
          </h4>

          <p className={style["parr-2"]}>
            En TodoServy validamos las credenciales, licencias y diplomas de tu
            negocio para dar más confianza a los usuarios.
          </p>
          <p className={style["parr-2"]}>
            Toda la información en nuestra plataforma universal y unificada
            serán un motivo de confianza para que tus clientes agenden tus
            servicios.
          </p>
          <button className={style["buss"]}>
            <Link to={"/bussines-reclam"}>Reclama tu negocio</Link>
          </button>
          <br />
        </div>
      </div>
      <div className={style["section-3"]}>
        <div className={style["container-1"]}>
          <h3 className={style["title-todo1"]}>TodoServy es Universal</h3>
          <p className={style["text-info"]}>
            En TodoServy, puedes ofrecer una amplia variedad de servicios si
            eres un negocio, empresa, micronegocio y emprendimiento digital de
            la ciudad.
          </p>
          <p className={style["text-info2"]}>
            Puedes ofrecer cualquier servicio, no importa si es de reparaciones,
            entrenamiento, belleza, clases o cualquier otro, en TodoServy lo
            puedes hacer.
          </p>
          <p className={style["text-info2"]}>
            Nuestra plataforma es universal, lo que significa que no está
            limitada a una sola área geográfica o industria específica.
          </p>
          <p className={style["text-info2"]}>
            Además, al tener todos los servicios en un solo lugar, tus clientes
            podrán comparar fácilmente precios y calidad antes de tomar una
            decisión, asegurándose de obtener el mejor trato posible.
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
            encuentran en internet sobre tu negocio, emprendimiento digital,
            empresa y microempresa, registrado en nuestra plataforma.
          </p>
          <p className={style["text-info2"]}>
            Esto brinda una visión completa y precisa de la reputación y calidad
            de tus servicios ofrecidos, lo que permite a tus clientes ver que tu
            negocio es confiable y que tienes experiencia para brindarle un
            servicio de calidad.
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
          Aumenta tus agendamientos de servicios con nuestra solución
          innovadora. Con nuestra agenda revolucionaria en línea, tus clientes
          podrán verificar fácilmente la disponibilidad y programar sus
          servicios de manera eficiente.
        </p>

        <p className={style["text-black"]}>
          ¡Optimiza tu negocio y obtén más agendamientos hoy mismo!
        </p>
        <p className={style["text-agend"]}>
          Con nuestro sistema de agendamiento en línea, podrás tener una visión
          detallada de tu equipo de trabajo y sus disponibilidades. En el perfil
          de negocio, tus clientes podrán programar sus servicios de acuerdo con
          la disponibilidad de tu equipo.
        </p>
        <p className={style["text-agend"]}>
          Recuerda que, si eres “Negocio Free”, tienes un límite de
          agendamientos sobre tus servicios, pero si te haces “Negocio Premium”
          la cantidad de agendamientos será ilimitada.
        </p>

        <Slide2 />
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
            Tus servicios están a la mano de tus clientes gracias a nuestra
            plataforma única del mercado.
          </p>
          <p className={style["text-info5"]}>
            Puedes ofrecer cualquier tipo de servicios, desde jardinería a
            domicilio, peluquería de perros, masajes reductores, finanzas,
            seguridad y cualquier otro oficio que quieras.
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
            Tus clientes pagarán a través de una plataforma 100% segura, a
            través de efectivo, transferencias bancarias o tarjetas de crédito y
            débito.
          </p>
        </div>
      </div>

      <BenefitCard />

      <Questions />
    </div>
  );
}
