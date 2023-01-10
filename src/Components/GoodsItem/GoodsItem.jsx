import React from "react";

const GoodsItem = (props) => {
  const { mainId, displayName, description, price, imgSrc } = props;
  return (
    <div className='row'>
      <div className='col s12 m6'>
        <div className='card' id={mainId}>
          <div className='card-image'>
            <img src={imgSrc} alt={displayName} />
            <span className='card-title'>{displayName}</span>
          </div>
          <div className='card-content'>
            <p>{description}</p>
          </div>
          <div className='card-action'>
            <span className="right">{price.finalPrice}</span>
            <button className='btn'>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
