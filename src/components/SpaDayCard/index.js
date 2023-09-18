//create react header component
import React from "react";

//import css
import Image from "next/image";
import Button from "@/components/Button";
import styles from "./spaDayCard.module.scss";

import floresDelta from "../../assets/images/tratamientos/flores-delta.jpg";

const treatments = [
  "Masaje a elección de 50’",
  "Reflexología 25'",
  "Circuito de Aguas 120’:",
];

const subTreatments = [
  "•  Piscina in/out climatizada con cascadas cervicales e hidromasaje integrado",
  "•  Sala de relax con tumbonas térmicas",
  "•  Sala de hidratación",
  "•  Terraza con solárium y reposeras con vista a la Bahía Grande",
];

//create TreatmentCard component
const SpaDayCard = ({
  featuredHome,
  featuredImage,
  discount,
  name,
  duration,
  description,
  priceOnly,
  priceDouble,
  coffeeBreak,
  giftVoucherOnlyId,
  giftVoucherDoubleId,
}) => {
  return (
    <div className={styles["spa-card"]}>
      <div className={styles.media}>
        <div className={styles.badge}>
          {discount}MARTES Y MIÉRCOLES DE MUJERES 20% OFF
        </div>
        <Image
          className={styles.image}
          src={floresDelta}
          height={450}
          alt="SAN VALENTÍN EN WSPA ESCAPADA EN PAREJA"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <h4 className={styles["pre-title"]}>DURACIÓN: 3.30HS {duration}</h4>
          <h2 className={styles["treatment-title"]}>W DAY SPA{name}</h2>
        </div>
        <div className={styles.detail}>
          <ul className={styles.list}>
            {treatments.map((treatment, index) => (
              <li key={index} className={styles["first-level"]}>
                <i className="icon-check"></i> {treatment}
              </li>
            ))}

            {subTreatments.map((subTreatment, index) => (
              <li key={index} className={styles["sub-level"]}>
                {subTreatment}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.actions} >
          <h5 className={styles.price}>$321321{priceOnly}</h5>
          <Button giftVoucherOnlyId="55" text="COMPRÁ ONLINE" target="_blank" />
        </div>
      </div>
    </div>
  );
};

//export TreatmentCard component
export default SpaDayCard;
