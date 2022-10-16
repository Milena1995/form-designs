import { View } from "app-studio";
import React from "react";
import { Horizontal } from "../../layout/layout";
import { ReactComponent as HideIcon } from "../../assets/svg/hide.svg";
import styleForm from "../../stylesheet/SignUpFormId1.module.scss";

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
      <View id={styleForm.errorMessageForm2}>
        Use 8 or more characters with a mix of letters, numbers and symbols.
      </View>
    </>
  );
}
