import React from "react";
import styles from "./Featured.module.css";
import ImageInfo from "../../UI/ImageInfo/ImageInfo";

const FeaturedRight = () => {
  return (
    <div className={styles["featured-right"]}>
      <ImageInfo
        clock='0,8"'
        shape="f/5,6"
        iso={100}
        place="Sweden"
        placeLink="https://www.google.kz/maps/place/AA+Anonyma+Alkoholister+H%C3%A4rn%C3%B6sand/@62.6337075,17.914231,16.6z/data=!4m15!1m8!3m7!1s0x465cb2396d35f0f1:0x22b8eba28dad6f62!2z0KjQstC10YbQuNGP!3b1!8m2!3d60.128161!4d18.643501!16zL20vMGQwdnFu!3m5!1s0x46649bb3c360581d:0x3f1c6fc72b229fd6!8m2!3d62.6334967!4d17.9137528!16s%2Fg%2F11rd_1rrfr?hl=ru"
        className={styles["featured-right_info"]}
      />
    </div>
  );
};

export default FeaturedRight;
