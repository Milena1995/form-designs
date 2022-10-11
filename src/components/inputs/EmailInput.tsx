import React from "react";

export function EmailInput({
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
      <label htmlFor="email">
        Email
        {errors.email && <span id={"email_error"}>* required</span>}
      </label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
    </>
  );
}
