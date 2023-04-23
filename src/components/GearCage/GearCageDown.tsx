import React from "react";
import MyHeader from "../../UI/MyHeader/MyHeader";
import Container from "../../UI/Container/Container";
import GearCageImages from "./GearCageImages";

const GearCageDown = () => {
  return (
    <Container>
      <MyHeader
        title="Past clients"
        text="Trusted by your favourite companies"
      />
      <GearCageImages />
    </Container>
  );
};

export default GearCageDown;
