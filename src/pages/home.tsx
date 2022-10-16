// import { View } from "app-studio";
import React, { useEffect } from "react";
import style from "../stylesheet/home.module.scss";
import { View } from "app-studio";
import { SignUpFormId1 } from "../components/forms/SignUpFormId1";
import { SignUpFormId2 } from "../components/forms/SignUpFormId2";
import { useSelector } from "react-redux";
import { SignUpFormId3 } from "../components/forms/SignUpFormId3";

export const listOfForm = [
  <SignUpFormId1 />,
  <SignUpFormId2 />,
  <SignUpFormId3 />,
];
const HomePage = () => {
  const currentIndex = useSelector((state: any) => state.slide.value);

  useEffect(() => {}, [currentIndex]);

  return (
    <View id={style.container}>
      {listOfForm[currentIndex] ? (
        listOfForm[currentIndex]
      ) : (
        <View margin={"auto"}>No form available</View>
      )}
    </View>
  );
};

export default HomePage;
