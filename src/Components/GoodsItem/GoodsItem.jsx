//карточка товара

import React, { useContext } from "react";
import { ShopContext } from "../../context";
import styles from "./GoodsItem.module.scss";

const GoodsItem = (props) => {
  const { mainId, displayName, price, imgSrc } = props;

  //функция добавления товара в корзину
  const { addItem2Basket } = useContext(ShopContext);

  const varAddItemFunc = () =>
    addItem2Basket({
      mainId,
      displayName,
      price,
    });

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

          <div className={styles.cardAction}>
            <button className='btn' onClick={varAddItemFunc}>
              Купить
            </button>
            <span>{price.finalPrice} v-b.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
