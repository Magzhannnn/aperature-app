import React from "react";
import styles from "./Featured.module.css";
import FeaturedLeft from "./FeaturedLeft";
import FeaturedRight from "./FeaturedRight";

const FeaturedWrapDown = () => {
  return (
    <div className={styles["featured-down"]}>
      <FeaturedLeft />
      <FeaturedRight />
    </div>
  );
};

export default FeaturedWrapDown;
