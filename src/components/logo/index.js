//create react header component
import React from "react";

//import css
import styles from "./logo.module.scss";

//create logo component
const Logo = () => {
  return (
    <a className={styles["com-logo"]} href="index.html">
      <i className="icon-logo"> </i>
    </a>
  );
};

//export logo component
export default Logo;
