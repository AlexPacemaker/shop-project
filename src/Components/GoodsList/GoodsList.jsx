import React from "react";
import GoodsItem from "../GoodsItem/GoodsItem";
import styles from './GoodsList.module.scss'

const GoodsList = (props) => {
  const { goods = [] } = props;

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
        />
      ))}
    </div>
  );
};

export default GoodsList;
