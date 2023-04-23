import React from "react";
import styles from "./Home.module.css";

const HomeContent = () => {
  return (
    <div className={styles["home-content"]}>
      <div className={styles["home-content_header"]}>
        Photographer & Filmmaker
      </div>
      <div className={styles["home-content_title"]}>Aperture Studios</div>
      <div className={styles["home-content_text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
      </div>
    </div>
  );
};

export default HomeContent;
