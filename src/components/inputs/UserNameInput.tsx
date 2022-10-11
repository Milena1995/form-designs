import React from "react";
export function UserNameInput({
  handleChange,
  handleBlur,
  errors,
  values,
}: {
  handleChange: any;
  handleBlur?: any;
  errors: any;
  values: any;
}) {
  return (
    <>
      {" "}
      <label htmlFor="username">
        Username
        {errors.username && <span id={"username_error"}>* required</span>}
      </label>
      <input
        type="username"
        name="username"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      />
    </>
  );
}
