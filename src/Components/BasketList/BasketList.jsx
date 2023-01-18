import React, { useContext } from "react";
import { ShopContext } from "../../context";
import BasketItem from "../BasketItem/BasketItem";
import styles from "./BasketList.module.scss";

const BasketList = () => {
  const { order, handleBasketShow } = useContext(ShopContext);

  //вычисляем общую сумму в корзине
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
    <div className={styles.basketMain}>
      <ul className='collection'>
        <li className='collection-item active' style={{ fontSize: 25 }}>
          Корзина
        </li>
        {order.length ? (
          order.map((item) => <BasketItem key={item.mainId} {...item} />)
        ) : (
          <li className='collection-item' style={{ fontSize: 25 }}>
            Корзина пуста
          </li>
        )}
        <li style={{ fontSize: 30 }} className='collection-item active'>
          <b>Общая стоимость:</b> {totalPrice} v-buckses!
        </li>
        <button
          className='left btn'
          style={{
            fontSize: 25,
            borderRadius: 10,
            padding: 1,
            paddingBottom: 2,
            textAlign: "center",
            marginTop: 15,
            marginBottom: 10,
            marginLeft: 300,
          }}
        >
          Оформить заказ
        </button>
      </ul>
      <i className='material-icons' onClick={handleBasketShow}>
        close
      </i>
    </div>
  );
};

export default BasketList;
