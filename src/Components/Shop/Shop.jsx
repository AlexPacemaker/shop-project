import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
import Alert from "../Alert/Alert";
import BasketList from "../BasketList/BasketList";
import Cart from "../Cart/Cart";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShown, setBasketShown] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const handleBasketShow = () => setBasketShown(!isBasketShown);

  const addItem2Basket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const incrementQty = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQauntity = el.quantity + 1;
        return {
          ...el,
          quantity: newQauntity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decrementQty = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQauntity = el.quantity - 1;
        return {
          ...el,
          quantity: newQauntity >= 0 ? newQauntity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => setAlertName("");

  return (
    <main>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList addItem2Basket={addItem2Basket} goods={goods} />
      )}
      {isBasketShown && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;
