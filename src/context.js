import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShown: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  
  value.setGoods = (data) => dispatch({ type: "SET_GOODS", payload: data });

  //функция добавления товара в корзину
  value.addItem2Basket = (item) =>
    dispatch({ type: "ADD_ITEM_2_BASKET", payload: item });

  value.closeAlert = () => dispatch({ type: "CLOSE_ALERT" });
  value.removeFromBasket = (itemId) =>
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  value.incrementQty = (itemId) =>
    dispatch({ type: "INCREMENT_QTY", payload: { id: itemId } });
  value.decrementQty = (itemId) =>
    dispatch({ type: "DECREMENT_QTY", payload: { id: itemId } });
  value.handleBasketShow = () => dispatch({ type: "HANDLE_BASKET_SHOW" });

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
