import React, { useEffect } from "react";
import styles from "./Alert.module.scss";

const Alert = ({ name, closeAlert }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
    //eslint-disable-next-line
  }, [name]);

  return (
    <div className={styles.toastContainer}>
      <div id='toast-container'>
        <div className='toast'>{name} добавлен в корзину!</div>
      </div>
    </div>
  );
};

export default Alert;
