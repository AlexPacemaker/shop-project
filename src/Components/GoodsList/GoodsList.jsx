import React from "react";
import GoodsItem from "../GoodsItem/GoodsItem";

const GoodsList = (props) => {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here...</h3>;
  }

  return (
    <div>
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
