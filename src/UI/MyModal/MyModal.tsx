import React from "react";
import styles from "./MyModal.module.css";
import { selectIsModal } from "../../store/modal/modal-selectors";
import { useDispatch, useSelector } from "react-redux";
import { isModal } from "../../store/modal/modal-reducer";
import { removeProduct } from "../../store/business/business-reducer";

interface MyModalProps {
  children: React.ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({ children }) => {
  const dispatch = useDispatch();
  const modal = useSelector(selectIsModal);

  const exitModalHandler = () => {
    dispatch(removeProduct);
    dispatch(isModal);
  };

  return (
    <div className={modal ? `${styles.modal} ${styles.active}` : styles.modal}>
      <div className={styles.modal_overflow} onClick={exitModalHandler}></div>
      <div className={styles.modal_content}>{children}</div>
    </div>
  );
};

export default MyModal;
