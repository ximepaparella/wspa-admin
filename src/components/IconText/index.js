//create react header component
import React from "react";

//import css
import styles from "./iconText.module.scss";

//create logo component
const IconText = ({title, text, icon }) => {
  return (
    <div class={styles["com-icon-text"]}>
    <i class={icon}></i>
    <div>
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
</div>
  );
};

//export logo component
export default IconText;
