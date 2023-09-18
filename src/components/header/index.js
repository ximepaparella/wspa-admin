//create react header component
import React from "react";

//import css
import styles from "./header.module.scss";

//import components
import Logo from "../Logo/index";
import Menu from "../Menu/index";

//create header component
const Header = () => {
  return (
    <header className={styles["mod-header"]}>
      <div className={styles.lay}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

//export header component
export default Header;
