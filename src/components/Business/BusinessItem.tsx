import React from "react";
import styles from "./Business.module.css";
import { IBisunessData } from "../../types/bisunessData";
import ButtonSite from "../../UI/ButtonSite/ButtonSite";
import { useDispatch } from "react-redux";
import { isModal } from "../../store/modal/modal-reducer";
import { getProduct } from "../../store/business/business-reducer";

interface BusinessItemProps {
  bisunessItem: IBisunessData;
}

const BusinessItem: React.FC<BusinessItemProps> = ({ bisunessItem }) => {
  const dispatch = useDispatch();

  const onModalHandler = () => {
    dispatch(getProduct(bisunessItem));
    dispatch(isModal);
  };

  return (
    <div className={styles[`bisuness-item_${bisunessItem.image}`]}>
      <div className={styles.b_wrap}></div>
      <div className={styles["business-item_title"]}>{bisunessItem.title}</div>
      <div className={styles["business-item_text"]}>{bisunessItem.text}</div>
      <ButtonSite title="Read more" onClickHandler={onModalHandler} />
    </div>
  );
};

export default BusinessItem;
