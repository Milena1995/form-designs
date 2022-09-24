import React from "react";
import { Formik } from "formik";
import { View } from "app-studio";
import { Center } from "../../style/style";
import "../../stylesheet/form1.scss";

export const Form1 = () => (
  <Center>
    <View className={"form1-content"}>
      <h1>FIRST FORM!</h1>
      <Formik
        initialValues={{ email: "ma@gmail.com", password: "45678" }}
        validate={(values) => {
          const errors = { email: "" };
          if (!values.email) {
            errors.email = "Required";
            return errors;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
            return errors;
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className={"form1-container"} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password}
            <button type="submit" onClick={() => console.log("clicked")}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </View>
  </Center>
);
