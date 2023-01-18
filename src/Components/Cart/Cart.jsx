import React, { useContext } from "react";
import { ShopContext } from "../../context";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  const quantity = order.length;

  return (
    <div className={styles.cart} onClick={handleBasketShow}>
      <div className='black white-text'>
        <i className='material-icons'>shopping_cart</i>
        {quantity ? <span>{quantity}</span> : null}
      </div>
    </div>
  );
};

export default Cart;
