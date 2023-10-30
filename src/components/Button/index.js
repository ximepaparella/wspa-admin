// Create React Button component
import React from "react";
import styles from "./button.module.scss";

const Button = ({ giftVoucherOnlyId, target, text, url }) => {
  // Conditionally set the href attribute based on the props
  const href = url
    ? url // If "url" prop is provided, use it directly
    : `http://wyndhamnordelta.giftsandvouchers.com/?seccion=detalles&id=${giftVoucherOnlyId}`;

  return (
    <a href={href} className={styles.button} target={target}>
      {text}
    </a>
  );
};

export default Button;