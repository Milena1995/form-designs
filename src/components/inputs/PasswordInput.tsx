import { View } from "app-studio";
import React from "react";
import { Horizontal } from "../../layout/layout";
import { ReactComponent as HideIcon } from "../../assets/svg/hide.svg";

export function PasswordInput({
  handleChange,
  handleBlur,
  values,
  callback,
  hide,
}: {
  handleChange: any;
  handleBlur?: any;
  values: any;
  callback: any;
  hide?: boolean;
}) {
  return (
    <>
      {" "}
      <Horizontal justifyContent={"space-between"}>
        <label htmlFor="password">Password</label>
        <Horizontal justifyContent={"center"} alignItems={"center"}>
          <HideIcon onClick={callback} />
          <View id={"hide"}>{hide ? "Show" : "Hide"}</View>
        </Horizontal>
      </Horizontal>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      <View>
        <ul id={"unordered-list"}>
          <li id={"more-characters"}>Use 8 or more characters</li>
          <li id={"uppercase"}>One Uppercase character</li>
          <li id={"lowercase"}>One lowercase character</li>
          <li id={"special-characters"}>One special character</li>
          <li id={"one-character"}>One number</li>
        </ul>
      </View>
    </>
  );
}
