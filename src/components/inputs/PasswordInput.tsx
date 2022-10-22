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
  errorMessage,
}: {
  handleChange: any;
  handleBlur?: any;
  values: any;
  callback: any;
  hide?: boolean;
  errorMessage: any;
}) {
  const ErrorMessage = errorMessage;
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
      <ErrorMessage />
    </>
  );
}
