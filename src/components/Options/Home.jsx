import SubNav from "./SubNav";
import Services from "./Services/Service";
import Business from "./Business/Business";
import Profesional from "./Profesional/Profesional";
import style from "../../style/Options/Home.module.css";
import { useParams } from "react-router-dom";

export default function Home() {
  const { options } = useParams();
  return (
    <div className={style["content"]}>
      <SubNav />

      <div>
        {options === "services" ? (
          <Services />
        ) : options === "business" ? (
          <Business />
        ) : options === "profesional" ? (
          <Profesional />
        ) : null}
      </div>
    </div>
  );
}
