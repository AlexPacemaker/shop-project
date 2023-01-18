import React from "react";
import styles from "./BasketItem.module.scss";
import { useContext } from "react";
import { ShopContext } from "../../context";

const BasketItem = ({ mainId, displayName, price, quantity }) => {
  const removerItem = () => removeFromBasket(mainId);

  const { removeFromBasket, incrementQty, decrementQty } =
    useContext(ShopContext);

  return (
    <div className={styles.basketItem}>
      <li className='collection-item'>
        {displayName}{" "}
        <img
          src='/img/add.svg'
          alt='add'
          width={25}
          onClick={() => incrementQty(mainId)}
        />{" "}
        x{quantity}{" "}
        <img
          src='/img/remove.svg'
          alt='remove'
          width={25}
          onClick={() => decrementQty(mainId)}
        />{" "}
        = {price.finalPrice * quantity}
        <img
          className='right'
          src='/img/close.svg'
          alt='closeBtn'
          width={20}
          title='Удалить'
          onClick={removerItem}
        />
      </li>
    </div>
  );
};

export default BasketItem;
