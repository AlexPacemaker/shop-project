import React, { useEffect, useContext } from "react";
import { ShopContext } from "../../context";
import { API_KEY, API_URL } from "../../config";
import Alert from "../Alert/Alert";
import BasketList from "../BasketList/BasketList";
import Cart from "../Cart/Cart";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";

const Shop = () => {
  const { setGoods, loading, order, alertName, isBasketShown } =
    useContext(ShopContext);

  // получение данных по API
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGoods(data.shop);
      });
    //eslint-disable-next-line
  }, []);

  //возвращение компонентов Cart, Proloader, Goodlist, BasketList and Alert
  return (
    <main>
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShown && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
