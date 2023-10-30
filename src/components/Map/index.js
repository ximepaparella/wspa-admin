//create react header component
import React from "react";

import Info from "@/components/Info";

//import css
import styles from "./map.module.scss";

//create map component
const Map = () => {
  return (
    <div className="row no-gap">
    <div className="col-12 col-tablet-6">
      <div className={styles["com-map"]}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.183404258393!2d-58.649995684775746!3d-34.3966839805137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca6b54f25ed31%3A0xd6ce5ee554e496af!2sWyndham%20Nordelta%20Tigre%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1581286690639!5m2!1ses!2sar" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
    </div>

    <div className="col-12 col-tablet-6">
     <Info />
    </div>
  </div>
  );
};

//export map component
export default Map;
