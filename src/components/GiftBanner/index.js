import React from "react";
import styles from "./giftBanner.module.scss";
import Title from "@/components/Title";
import Button from "@/components/Button"

const GiftBanner = ({ title, image, url, target, preTitle, buttonText }) => {
  const imageBanner = image;
  return (
    <section
      className={styles["gift-banner"]}
      style={{
        backgroundImage: `url(${imageBanner})`,
      }}
    >
      <div className="lay right">
        <Title banner title={title} pretitle={preTitle} />
        <Button text={buttonText} url={url} target={target} />
      </div>
    </section>
  );
};

export default GiftBanner;
