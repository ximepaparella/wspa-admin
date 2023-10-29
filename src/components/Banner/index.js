import React from "react";
import styles from "./banner.module.scss"

const Banner = ({ title, image }) => {  
  const imageBanner = image;
  console.log(imageBanner);
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${imageBanner})`,
      }}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Banner;
