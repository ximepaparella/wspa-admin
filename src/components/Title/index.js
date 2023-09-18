//create react header component
import React from "react";

//import css
import styles from "./title.module.scss";

//create logo component
const Title = ({pretitle, title, subtitle, text }) => {
  return (
    <div className={styles["com-title"]}>
      {pretitle && <h3 className={styles["pre-title"]}>{pretitle}</h3> }
      {title && <h1 className={styles["page-title"]}>{title}</h1>}
      {text && <p>
        {text}
      </p>
      }
    </div>
  );
};

//export logo component
export default Title;
