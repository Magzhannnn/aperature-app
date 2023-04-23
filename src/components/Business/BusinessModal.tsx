import React from "react";
import { useSelector } from "react-redux";
import styles from "./Business.module.css";
import { selectBusinessInfo } from "../../store/business/business-selector";
import ImageInfo from "../../UI/ImageInfo/ImageInfo";

const BusinessModal: React.FC = () => {
  const bsData = useSelector(selectBusinessInfo);

  return (
    <div className={styles["bs-modal"]}>
      <div className={styles[`bs-modal_${bsData.image}`]}></div>
      <div className={styles["bs-modal_right"]}>
        <div className={styles["bs-modal_title"]}>{bsData.title}</div>
        <div className={styles["bs-modal_text"]}>{bsData.text}</div>
        <ImageInfo
          clock={bsData.clock}
          shape={bsData.shape}
          iso={bsData.iso}
          place={bsData.place}
          placeLink={bsData.placeLink}
          className={styles["bs-modal_info"]}
        />
      </div>
    </div>
  );
};

export default BusinessModal;
