import React from "react";
import styleForm from "../../stylesheet/SignUpFormId1.module.scss";

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
        {errors.username && (
          <span className={styleForm.username_error}>* required</span>
        )}
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
