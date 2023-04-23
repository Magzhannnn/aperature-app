import React from "react";
import styles from "./ImageInfo.module.css";
import Clock from "../../image/ImageInfoClock.png";
import Shape from "../../image/ImageInfoShape.png";
import Iso from "../../image/ImageInfoISO.png";
import Place from "../../image/ImageInfoPlace.png";

interface ImageInfoProps {
  clock: string;
  shape: string;
  iso: number;
  place: string;
  placeLink?: string;
  className?: string;
}

const ImageInfo: React.FC<ImageInfoProps> = ({
  clock,
  shape,
  iso,
  place,
  placeLink,
  className,
}) => {
  let classes = styles["image-info"];
  if (className) classes = `${styles["image-info"]} ${className}`;

  return (
    <div className={classes}>
      <div className={styles["image-info_item"]}>
        <img src={Clock} alt="clock" /> <span>{clock}</span>
      </div>
      <div className={styles["image-info_item"]}>
        <img src={Shape} alt="shape" /> <span>{shape}</span>
      </div>
      <div className={styles["image-info_item"]}>
        <img src={Iso} alt="iso" /> <span>{iso}</span>
      </div>
      <div className={styles["image-info_item"]}>
        <a href={placeLink ? placeLink : "#"} target="_blank" className={styles["image-info_item"]}>
          <img src={Place} alt="place" />
          <span>{place}</span>
        </a>
      </div>
    </div>
  );
};

export default ImageInfo;
