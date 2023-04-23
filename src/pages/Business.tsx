import React from "react";
import BusinessList from "../components/Business/BusinessList";
import MyHeader from "../UI/MyHeader/MyHeader";

const Business = () => {
  return (
    <div>
      <MyHeader
        title="What we do."
        text="The areas that we're specialized in."
      />
      <BusinessList />
    </div>
  );
};

export default Business;
