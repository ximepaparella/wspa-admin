//create react header component
import React from "react";

//import css
import styles from "./menu.module.scss";

//create menu component
const Menu = () => {
  return (
    <>
      <a id="menu-mobile">
        <i className={styles["icon-menu"]}></i>
      </a>
      <nav className={styles["mod-menu"]}>
        <a className="active" href="index.html">
          Inicio
        </a>
        <a href="tratamientos.html">Tratamientos</a>
        <a href="circuitos-de-spa.html">Circuitos de Spa</a>
        <a href="membresias.html">Membresías</a>
        <a href="contacto.html">Contacto</a>
      </nav>
    </>
  );
};

//export menu component
export default Menu;
