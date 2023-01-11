import React from "react";
import styles from "./Cart.module.scss";

const Cart = (props) => {
  const { quantity = 0 } = props;
  return (
    <div className={styles.cart}>
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
