import React from "react";
import { IIdentical } from "../../types/identical";
import IdenticalWrap from "../../UI/IdenticalWrap/IdenticalWrap";

const GearCageUp = () => {
  const item: IIdentical = {
    value: "featured2",
    title: "Monstera Leafs",
    text: "Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.",
    clock: "1/400s",
    shape: "f/3,5",
    iso: 100,
    place: "Costa Rica",
    placeLink:
      "https://www.google.kz/maps/place/%D0%9F%D0%BB%D0%B0%D0%B9%D1%8F+%D0%91%D0%BE%D0%BD%D0%B8%D1%82%D0%B0/@10.0077453,-83.0649758,15.98z/data=!4m15!1m8!3m7!1s0x8f92e56221acc925:0x6254f72535819a2b!2z0JrQvtGB0YLQsC3QoNC40LrQsA!3b1!8m2!3d9.748917!4d-83.753428!16zL20vMDFwOHM!3m5!1s0x8fa70ff5c3b8dac3:0xb34c53199b9d28c7!8m2!3d10.0087578!4d-83.0619774!16s%2Fg%2F11b5m143q9?hl=ru",
  };
  return <IdenticalWrap item={item} />;
};

export default GearCageUp;
