// import { View } from "app-studio";
import React from "react";
import "../stylesheet/home.scss";
import { useMount, View } from "app-studio";
import { SignUpFormId1 } from "../components/forms/SignUpFormId1";
import "../../src/stylesheet/home.scss";
import { SignUpFormId2 } from "../components/forms/SignUpFormId2";

export const listOfForm = [
  <SignUpFormId1 />,
  <SignUpFormId2 />,
  <SignUpFormId1 />,
];
const HomePage = () => {
  useMount(() => {
    localStorage.setItem("@index", "0");
  });

  const currentIndex = Number(localStorage.getItem("@index"));
  return (
    <View id={"container"} overflowY={"auto"}>
      {listOfForm[currentIndex] ? (
        listOfForm[currentIndex]
      ) : (
        <View margin={"auto"}>No form available</View>
      )}
    </View>
  );
};

export default HomePage;
