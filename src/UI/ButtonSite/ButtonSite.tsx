import React from "react";
import styles from "./ButtonSite.module.css";

interface ButtonSiteProps {
  title: string;
  onClickHandler: () => void;
}

const ButtonSite: React.FC<ButtonSiteProps> = ({ title, onClickHandler }) => {
  return (
    <div className={styles["button-site"]} onClick={onClickHandler}>
      <span className={styles["button-site_dark"]}></span>
      <span className={styles["button-site_title"]}>{title}</span>
    </div>
  );
};

export default ButtonSite;
