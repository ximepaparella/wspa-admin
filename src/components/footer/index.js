//create react header component
import React from "react";

//import css
import styles from "./footer.module.scss";

//create logo component
const Footer = () => {
  return (
    <footer className={styles["mod-footer"]}>
        <div className="lay">
            <div className="col-12">
                <p>Copyright © Wyndham Spa. Todos los derechos reservados. By Estudio Equis.</p>
            </div>
        </div>
    </footer>
  );
};

//export logo component
export default Footer;
