// import { View } from "app-studio";
import React from "react";
import { Horizontal, Vertical } from "../layout/layout";
import { ReactComponent as BackArrow } from "../../src/assets/svg/backArrow.svg";
import { ReactComponent as NextArrow } from "../../src/assets/svg/forwardArrow.svg";
import "../stylesheet/home.scss";
import { View } from "app-studio";
import { SignUpFormId1 } from "../components/forms/SignUpFormId1";

const HomePage = () => {
  return (
    <Vertical position={"relative"}>
      <Horizontal
        justifyContent={"space-between"}
        padding={"10px 5px"}
        position={"absolute"}
        zIndex={9999}
        width={"100%"}
        className="arrows-container"
      >
        <BackArrow width={24} height={24} />
        <View fontSize={18}>1/20</View>
        <NextArrow width={24} height={24} />
      </Horizontal>
      <SignUpFormId1 />
    </Vertical>
  );
};

export default HomePage;
