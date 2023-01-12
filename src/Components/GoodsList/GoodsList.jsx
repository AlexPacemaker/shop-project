import React from "react";
import GoodsItem from "../GoodsItem/GoodsItem";
import styles from "./GoodsList.module.scss";

const GoodsList = ({ goods, addItem2Basket }) => {
  if (!goods.length) {
    return <h3>Nothing here...</h3>;
  }

  return (
    <div className={styles.container}>
      {goods.map((good) => (
        <GoodsItem
          key={good.mainId}
          {...good}
          imgSrc={good.displayAssets[0].url}
          addItem2Basket={addItem2Basket}
        />
      ))}
    </div>
  );
};

export default GoodsList;
