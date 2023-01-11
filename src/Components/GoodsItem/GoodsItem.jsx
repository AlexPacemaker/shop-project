import React from "react";
import styles from "./GoodsItem.module.scss";

const GoodsItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    imgSrc,
    displayType,
  } = props;
  return (
    <div className={styles.itemContainer}>
      <div>
        <div className={styles.card} id={mainId}>
          <div className={styles.imgContainer}>
            <img src={imgSrc} alt={displayName} width={220} height={220} />
          </div>
          <div className={styles.title}>
            <span>{displayName}</span>
          </div>
          <div className={styles.displayDescription}>
            <span>{displayType}</span>
            <p>{displayDescription}</p>
          </div>
          <div className={styles.cardAction}>
            <button className='btn'>Купить</button>
            <span>{price.finalPrice} руб.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
