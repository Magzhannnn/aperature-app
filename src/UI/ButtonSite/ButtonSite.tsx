import React from "react";
import styles from "./ButtonSite.module.css";

interface ButtonSiteProps {
  title: string;
  className?: string;
  onClickHandler: () => void;
}

const ButtonSite: React.FC<ButtonSiteProps> = ({
  title,
  className,
  onClickHandler,
}) => {
  const classes = `${styles["button-site"]} ${className ? className : ""}`;

  return (
    <div className={classes} onClick={onClickHandler}>
      <span className={styles["button-site_dark"]}></span>
      <span className={styles["button-site_title"]}>{title}</span>
    </div>
  );
};

export default ButtonSite;
