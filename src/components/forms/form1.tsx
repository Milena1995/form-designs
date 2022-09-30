import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { View } from "app-studio";
import "../../stylesheet/form1.scss";
import { Center, Horizontal, Vertical } from "../../layout/layout";
import { ReactComponent as HideIcon } from "../../assets/svg/hide.svg";

export const Form1 = () => {
  const [hide, setHide] = useState(true);
  /**
   * inputs is an array containing HTMLElements.
   * input[index] is an HTMLElement(input tag) having attribute name
   * function will be executed when the variable hide is changed.
   */
  useEffect(() => {
    var inputs = document.getElementsByTagName("input");
    for (var index = 0; index < inputs.length; ++index) {
      if (inputs[index].name === "password") {
        !hide
          ? (inputs[index].type = "text")
          : (inputs[index].type = "password");
      }
    }
  }, [hide]);

  const initialValues = {
    email: "",
    password: "",
    username: "",
  };

  const handleOnSubmit = (setSubmitting: any, values: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Horizontal width={"100%"} height={"100vh"} overflowY={"hidden"}>
      <Center height={"100%"} flex={2}>
        <Vertical className={"form1-content"}>
          <View id={"title"}>Welcome to Design Community </View>
          <View id={"log-in-text"}>
            Already have an account? <a href=" ">Log in</a>
          </View>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = { email: "", password: "", username: "" };
              // Handle email errors
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              // Handle password errors
              if (!values.password) {
                errors.password = "Required";
              }
              if (values.password.length < 8) {
                var characters = document.getElementById("more-characters");
                if (characters) characters.style.color = "red";
              }
              // Handle username errors
              if (!values.username) {
                errors.username = "Username is required";
              }
              /*Verify if errors contains at least one error message, if so return errors.
               *new Set removes duplicates, thus if length is greater than one. Errors still exist.
               *["", "", ""] no erros. With new Set [""]
               */
              if (new Set(Object.values(errors)).size !== 1) return errors;
            }}
            onSubmit={(values, { setSubmitting }) =>
              handleOnSubmit(setSubmitting, values)
            }
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={"form1-container"} onSubmit={handleSubmit}>
                {/* **********************************Email Section*************************** */}
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email}
                {/* **********************************UserName Section*************************** */}
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {errors.username}
                {/* **********************************Password Section*************************** */}
                <Horizontal justifyContent={"space-between"}>
                  <label htmlFor="password">Password</label>
                  <Horizontal justifyContent={"center"} alignItems={"center"}>
                    <HideIcon onClick={() => setHide(!hide)} />
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
                {/* **********************************checkbox Section*************************** */}
                <Horizontal
                  id={"checkbox-container"}
                  alignItems={"center"}
                  margin={"32px 0"}
                >
                  <input
                    type="checkbox"
                    id="checkbox-input"
                    name="checkbox"
                    value="checkbox"
                  />
                  <View id={"checkbox1"} htmlFor="checkbox">
                    I want to receive emails about the product, feature updates,
                    events, and marketing promotions.
                  </View>
                </Horizontal>
                {/* **********************************agreement Section*************************** */}
                <View id={"agreement"} paddingBottom={32}>
                  By creating an account, you agree to the{" "}
                  <a href=" ">Terms of use</a> and{" "}
                  <a href=" ">Privacy Policy</a>.
                </View>
                {/* **********************************Submit Section*************************** */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => console.log("clicked")}
                >
                  Create an account
                </button>
                <View id={"log-in-text"} alignSelf={"center"} marginTop={8}>
                  Already have an account? <a href=" ">Log in</a>
                </View>
              </form>
            )}
          </Formik>
        </Vertical>
      </Center>
      <View className={"right-section"} flex={1} />
    </Horizontal>
  );
};
