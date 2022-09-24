import { View } from "app-studio";
import React from "react";

export const Vertical = ({ children }: any) => {
  return (
    <View display={"flex"} flexDirection={"column"} height={"100vh"}>
      {children}
    </View>
  );
};

export const Horizontal = ({ children }: any) => {
  return (
    <View display={"flex"} flexDirection={"row"}>
      {children}
    </View>
  );
};

export const Center = ({ children }: any) => {
  return (
    <View
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      {children}
    </View>
  );
};
