import React from "react";
import styles from "./Cart.module.scss";

const Cart = ({ quantity, handleBasketShow }) => {
  return (
    <div className={styles.cart} onClick={handleBasketShow}>
      <div className='black white-text'>
        <i className='material-icons'>shopping_cart</i>
        {quantity ? (
          <span className={styles.cartQuantity}>{quantity}</span>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
