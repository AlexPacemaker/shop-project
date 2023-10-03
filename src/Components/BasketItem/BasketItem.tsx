//компонент элемент, который добавляется и отображается в корзине
import React from "react";
import styles from "./BasketItem.module.scss";
import { ShopContext } from "../../context";
import add from "../../Assets/svg/add.svg";
import remove from "../../Assets/svg/remove.svg";
import close from "../../Assets/svg/close.svg";

const BasketItem = ({ mainId, displayName, price, quantity }):JSX.Element => {
  const removerItem = () => removeFromBasket(mainId);

  const { removeFromBasket, incrementQty, decrementQty } = React.useContext(ShopContext);

  return (
    <div className={styles.basketItem}>
      <li className='collection-item'>
        {displayName} <img src={add} alt='add' width={25} onClick={() => incrementQty(mainId)} /> x{quantity}{" "}
        <img src={remove} alt='remove' width={25} onClick={() => decrementQty(mainId)} /> ={" "}
        {price.finalPrice * quantity}
        <img className='right' src={close} alt='closeBtn' width={25} title='Удалить' onClick={removerItem} />
      </li>
    </div>
  );
};

export default BasketItem;
