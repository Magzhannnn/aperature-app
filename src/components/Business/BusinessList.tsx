import React from "react";
import styles from "./Business.module.css";
import bisunessData from "../../data/business-areas.json";
import { IBisunessData } from "../../types/bisunessData";
import BusinessItem from "./BusinessItem";
import Container from "../../UI/Container/Container";
import MyModal from "../../UI/MyModal/MyModal";
import BusinessModal from "./BusinessModal";

const BusinessList = () => {
  return (
    <Container className={styles["bisuness-list"]}>
      {bisunessData.map((bisunessItem: IBisunessData) => (
        <BusinessItem bisunessItem={bisunessItem} key={bisunessItem.id} />
      ))}
      <MyModal>
        <BusinessModal />
      </MyModal>
    </Container>
  );
};

export default BusinessList;
