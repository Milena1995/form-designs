import { View } from "app-studio";
import React from "react";
import { Horizontal } from "../../layout/layout";

import styleForm from "../../stylesheet/SignUpFormId1.module.scss";

export function CheckBoxInput({
  handleChange,
  handleBlur,
}: {
  handleChange: any;
  handleBlur?: any;
}) {
  return (
    <Horizontal className={styleForm.checkbox_container}>
      <input
        type="checkbox"
        className={styleForm.checkbox_input}
        name="checkbox"
        onChange={handleChange}
        onBlur={handleBlur}
        value="checkbox"
      />
      <View className={styleForm.checkbox_text} htmlFor="checkbox">
        I want to receive emails about the product, feature updates, events, and
        marketing promotions.
      </View>
    </Horizontal>
  );
}
