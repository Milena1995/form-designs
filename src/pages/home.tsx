// import { View } from "app-studio";
import React, { useState } from "react";
import "../stylesheet/home.scss";
import { View } from "app-studio";
import { SignUpFormId1 } from "../components/forms/SignUpFormId1";
import { SlideArrow } from "../components/SlideArrows";
import "../../src/stylesheet/home.scss";
import { Vertical } from "../layout/layout";
import { SignUpFormId2 } from "../components/forms/SignUpFormId2";

const HomePage = () => {
  const listOfForm = [<SignUpFormId1 />, <SignUpFormId2 />, <SignUpFormId1 />];
  const [currentIndex, setCurrentIndex] = useState(0);

  const callback = (value: number) => {
    setCurrentIndex(value);
  };
  console.log(currentIndex);
  return (
    <View overflowY={"auto"}>
      <Vertical id={"container"}>
        <SlideArrow callback={callback} listForm={listOfForm} />
        {listOfForm[currentIndex] ? (
          <View>{listOfForm[currentIndex]}</View>
        ) : (
          <View textAlign={"center"} height={"100%"}>
            No form available
          </View>
        )}
      </Vertical>
    </View>
  );
};

export default HomePage;
