export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "ADD_ITEM_2_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === payload.mainId
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }

    case "INCREMENT_QTY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === payload.id) {
            const newQauntity = el.quantity + 1;
            return {
              ...el,
              quantity: newQauntity,
            };
          } else {
            return el;
          }
        }),
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === payload.id) {
            const newQauntity = el.quantity - 1;
            return {
              ...el,
              quantity: newQauntity,
            };
          } else {
            return el;
          }
        }),
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShown: !state.isBasketShown,
      };
    default:
      return state;
  }
}
