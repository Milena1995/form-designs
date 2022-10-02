// import { View } from "app-studio";
import React from "react";
import "../stylesheet/home.scss";
import { View } from "app-studio";
import { SignUpFormId1 } from "../components/forms/SignUpFormId1";
import { SlideArrow } from "../components/SlideArrows";
import "../../src/stylesheet/home.scss";
import { Vertical } from "../layout/layout";

const HomePage = () => {
  return (
    <View overflowY={"auto"}>
      <Vertical id={"container"}>
        <SlideArrow />
        <SignUpFormId1 />
      </Vertical>
    </View>
  );
};

export default HomePage;
