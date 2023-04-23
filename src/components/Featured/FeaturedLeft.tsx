import React from "react";
import styles from "./Featured.module.css";
import ButtonSite from "../../UI/ButtonSite/ButtonSite";

const FeaturedLeft = () => {
  return (
    <div className={styles["featured-left"]}>
      <div className={styles["featured-left_header"]}>The Gear cage</div>
      <div className={styles["featured-left_title"]}>
        The tools that we use.
      </div>
      <div className={styles["featured-left_text"]}>
        The say that "no place is boring if you've had a good night's sleep and
        have a pocket full of unexposed film". While we don't shoot (a lot) of
        film these days — these are the tools that we actually use everyday to
        capture the amazing things around us.
      </div>
      <ButtonSite
        title="Check it out"
        onClickHandler={() => alert("Start Check it out")}
      />
    </div>
  );
};

export default FeaturedLeft;
