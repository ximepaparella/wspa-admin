// Your menuData remains unchanged.

// React header component
import React from "react";

// Import CSS
import styles from "./menu.module.scss";
import menuData from "../../data/menuData";

console.log('menuData', menuData);

// Create menu component
const Menu = () => {
  return (
    <>
      {/* If this is meant to be a clickable menu icon, it's more appropriate to use a button. */}
      <button id="menu-mobile" className={styles["menu-button"]}>
        <i className={styles["icon-menu"]}></i>
      </button>
      
      <nav className={styles["mod-menu"]}>
          {menuData?.map((item, index) => (
           <a className="active" key={index} href={item.url}>
             {item.text}
           </a>
          ))}
      </nav>
    </>
  );
};

// Export menu component
export default Menu;