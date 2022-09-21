import { View } from "app-studio";
import React from "react";

export const Vertical = ({ children }: any) => {
  return (
    <View display={"flex"} flexDirection={"column"}>
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
