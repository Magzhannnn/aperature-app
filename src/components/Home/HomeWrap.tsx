import React from "react";
import styles from "./Home.module.css";
import HomeImage from "../../image/ApperatureStudio.png";
import ImageInfo from "../../UI/ImageInfo/ImageInfo";
import HomeContent from "./HomeContent";

const HomeWrap = () => {
  return (
    <>
      <div className={styles.home}>
        <div style={{ flex: 0.9 }}></div>
        <HomeContent />
      </div>
      <ImageInfo clock="1/2000s" shape="f/11" iso={100} place="Iceland" className={styles['home-info']} />
    </>
  );
};

export default HomeWrap;
