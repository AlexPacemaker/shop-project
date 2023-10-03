//всплывающая подсказка об добавлении товара
import React from "react";
import { ShopContext } from "../../context";
import styles from "./Alert.module.scss";

const Alert = (): JSX.Element => {
  const { alertName, closeAlert } = React.useContext(ShopContext);
  React.useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
    //eslint-disable-next-line
  }, [alertName]);

  return (
    <div className={styles.toastContainer}>
      <div id='toast-container'>
        <div className='toast'>{alertName} добавлен в корзину!</div>
      </div>
    </div>
  );
};

export default Alert;
