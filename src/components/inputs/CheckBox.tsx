import { View } from "app-studio";
import React from "react";
import { Horizontal } from "../../layout/layout";

export function CheckBoxInput({
  handleChange,
  handleBlur,
}: {
  handleChange: any;
  handleBlur?: any;
}) {
  return (
    <Horizontal id={"checkbox-container"}>
      <input
        type="checkbox"
        id="checkbox-input"
        name="checkbox"
        onChange={handleChange}
        onBlur={handleBlur}
        value="checkbox"
      />
      <View id={"checkbox-text"} htmlFor="checkbox">
        I want to receive emails about the product, feature updates, events, and
        marketing promotions.
      </View>
    </Horizontal>
  );
}
