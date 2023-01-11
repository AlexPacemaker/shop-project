import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";
import styles from "./Shop.module.scss";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        console.log(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
};

export default Shop;
