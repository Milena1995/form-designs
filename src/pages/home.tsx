// import { View } from "app-studio";
import React from "react";
import "../stylesheet/home.scss";
import { View } from "app-studio";
import { SignUpFormId1 } from "../components/forms/SignUpFormId1";
import { SlideArrow } from "../components/Arrows";
import "../../src/stylesheet/home.scss";

const HomePage = () => {
  return (
    <View id={"container"} overflowY={"auto"}>
      <SlideArrow />
      <SignUpFormId1 />
    </View>
  );
};

export default HomePage;
