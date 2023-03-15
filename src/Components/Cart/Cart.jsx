import React, { useContext } from "react";
import { ShopContext } from "../../context";
import styles from "./Cart.module.scss";
import cart from "../../Assets/svg/add-cart.svg";

const Cart = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  const quantity = order.length;

  return (
    <div className={styles.cart} onClick={handleBasketShow}>
      <div className='black white-text'>
        <img width={65} src={cart} alt='cart' />
        {quantity ? <span>{quantity}</span> : null}
      </div>
    </div>
  );
};

export default Cart;
