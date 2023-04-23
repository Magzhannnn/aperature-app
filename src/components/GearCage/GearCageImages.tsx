import React from "react";
import styles from "./GearCage.module.css";
import hill from "../../image/Hill.png";
import riks from "../../image/Riks.png";
import cai from "../../image/Cai.png";
import chill from "../../image/Chill.png";
import stockholm from "../../image/Stockholm.png";

const GearCageImages = () => {
  const linkedImages = [
    {
      id: 1,
      image: hill,
      alt: "hill",
      linked:
        "https://www.google.com/maps/place/Hill+Hayes+Ln,+Hullavington,+Chippenham,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/data=!4m2!3m1!1s0x487171ab689de451:0x8507b9764c1a5a8e?sa=X&ved=2ahUKEwju0evu2br-AhW_BhAIHeZFAuoQ8gF6BAgIEAI",
    },
    {
      id: 2,
      image: riks,
      alt: "riks",
      linked:
        "https://www.google.kz/maps/place/Riksgr%C3%A4nsen/@68.4264241,18.1222248,17z/data=!3m1!4b1!4m9!3m8!1s0x45dbb3de566a4377:0xfbb7440075406684!5m2!4m1!1i2!8m2!3d68.4264221!4d18.1247997!16s%2Fg%2F11g9h1dc0s?hl=ru",
    },
    {
      id: 3,
      image: cai,
      alt: "cai",
      linked:
        "https://www.google.kz/maps/place/studio+cais/@41.1412366,-8.6260876,17z/data=!3m1!4b1!4m6!3m5!1s0xd2465e7cf2de70b:0xd4208b9656c33195!8m2!3d41.1412326!4d-8.6235127!16s%2Fg%2F11r_y1pc10?hl=ru",
    },
    {
      id: 4,
      image: chill,
      alt: "chill",
      linked:
        "https://www.google.kz/maps/place/Chill'd+Industries+PTY+LTD/@-27.6809476,153.0417777,17z/data=!3m1!4b1!4m6!3m5!1s0x6b914761243cddef:0x92ee614f8ea0d0c5!8m2!3d-27.6809524!4d153.0443526!16s%2Fg%2F11q25h_cfv?hl=ru",
    },
    {
      id: 5,
      image: stockholm,
      alt: "stockholm",
      linked:
        "https://www.google.kz/maps/place/%D0%A1%D1%82%D0%BE%D0%BA%D0%B3%D0%BE%D0%BB%D1%8C%D0%BC,+%D0%A8%D0%B2%D0%B5%D1%86%D0%B8%D1%8F/@59.3260762,17.6524146,10z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM?hl=ru",
    },
  ];

  return (
    <div className={styles["gear-cage_images"]}>
      {linkedImages.map((lImage) => (
        <a href={lImage.linked} key={lImage.id} target="_blank">
          <img src={lImage.image} alt={lImage.alt} />
        </a>
      ))}
    </div>
  );
};

export default GearCageImages;
