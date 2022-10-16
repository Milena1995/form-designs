import React from "react";
import styleForm from "../../stylesheet/SignUpFormId1.module.scss";
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
        {errors.email && <span id={styleForm.email_error}>* required</span>}
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
