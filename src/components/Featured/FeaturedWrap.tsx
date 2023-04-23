import React from "react";
import styles from "./Featured.module.css";
import FeaturedWrapUp from "./FeaturedWrapUp";
import FeaturedWrapDown from "./FeaturedWrapDown";

const FeaturedWrap = () => {
  return (
    <div>
      <FeaturedWrapUp />
      <FeaturedWrapDown />
    </div>
  );
};

export default FeaturedWrap;
