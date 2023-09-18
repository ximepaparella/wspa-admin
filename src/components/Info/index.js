//create react header component
import React from "react";

//import css
import styles from "./info.module.scss";

//create info component
const Info = () => {
  return (
    <div className={styles.info}>
      <p>
        <i className="icon-clock"></i>
        <strong>Horarios</strong>
        <span>
          Martes de 11 a 20hs. Miércoles a domingos inclusive de 10 a 21hs.
        </span>
      </p>
      <p>
        <i className="icon-map"></i>
        <strong>Dirección</strong>
        <span>Avenida del puerto 240, Bahía Grande, Nordelta</span>
      </p>
      <p>
        <i className="icon-w-outline"></i>
        <strong>Turnos y consultas</strong>
        <a href="tel:+5491134209650" target="_blank">
          +54 9 11 3420-9650
        </a>
      </p>

      <div className={styles.social}>
        <a href="https://www.facebook.com/HotelWyndhamNordelta" target="_blank">
          <i className="icon-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/hotelwyndhamnordelta/"
          target="_blank"
        >
          <i className="icon-instagram"></i>
        </a>
      </div>
    </div>
  );
};

//export info component
export default Info;
