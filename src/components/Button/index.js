//create react header component
import React from "react";

//import css
import styles from "./button.module.scss";

//create Button component
const Button = ({giftVoucherOnlyId, target, text}) => {
  return (
    <a
      href={`http://wyndhamnordelta.giftsandvouchers.com/?seccion=detalles&id=${giftVoucherOnlyId}`}
      className={styles.button}
      target={target}
    >
     {text} 
    </a>
  );
};

//export Button component
export default Button;
