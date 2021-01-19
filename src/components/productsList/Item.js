import React from "react";
import styles from "./itemStyle.module.css";

function Item({ sourceImage, itemName, cost, link }) {
  return (
    <>
      <div className={styles.photo}>
        <img className={styles.image} src={sourceImage} alt={itemName}></img>
      </div>
      <div className={styles.information}>
        <p className={styles.name}>{itemName}</p>
        <p className={styles.price}>{cost}</p>
        <a className={styles.name} href={link}>
          Click the link for more
        </a>
      </div>
    </>
  );
}

export default Item;
