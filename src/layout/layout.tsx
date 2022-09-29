import { View } from "app-studio";
import React from "react";

export const Vertical = (props: any) => (
  <View display={"flex"} flexDirection={"column"} {...props} />
);

export const Horizontal = (props: any) => (
  <View display={"flex"} flexDirection={"row"} {...props} />
);

export const VerticalScroll = (props: any) => (
  <Vertical overflowY={"auto"} {...props} />
);

export const HorizontalScroll = (props: any) => (
  <Horizontal overflowX={"auto"} {...props} />
);

export const Center = (props: any) => (
  <View
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    {...props}
  />
);
