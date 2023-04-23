import React from "react";
import styles from "./MyHeader.module.css";

interface MyHeaderProps {
  text: string;
  title: string;
}

const MyHeader: React.FC<MyHeaderProps> = ({ text, title }) => {
  return (
    <div className={styles.header}>
      <div className={styles["header-title"]}>{title}</div>
      <div className={styles["header-text"]}>{text}</div>
    </div>
  );
};

export default MyHeader;
