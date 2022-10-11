import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { View } from "app-studio";
import "../../stylesheet/SignUpFormId1.scss";
import { Vertical } from "../../layout/layout";
import { SlideArrow } from "../SlideArrows";
import { listOfForm } from "../../pages/home";
import { EmailInput } from "../inputs/EmailInput";
import { UserNameInput } from "../inputs/UserNameInput";
import { PasswordInput } from "../inputs/PasswordInput";
import { CheckBoxInput } from "../inputs/CheckBox";

export const SignUpFormId1 = () => {
  const initialValues = {
    email: "",
    password: "",
    username: "",
    checkbox: false,
  };
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

  const handlePassword = (value: any) => {
    let error: any = "";
    const errorTypes = [
      { id: "more-characters", regex: value.length < 8 },
      { id: "uppercase", regex: !/[A-Z]/.test(value) },
      { id: "lowercase", regex: !/[a-z]/.test(value) },
      {
        id: "special-characters",
        regex: !/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value),
      },
      { id: "one-character", regex: !/\d/.test(value) },
    ];
    for (var i = 0; i < errorTypes.length; i++) {
      const name = document.getElementById(errorTypes[i].id);
      if (name) {
        if (errorTypes[i].regex) {
          name.style.color = "red";
          error = true;
        } else {
          name.style.color = "#333333";
        }
      }
    }
    return error;
  };
  const handleOnSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  };

  const handleValidation = (values: any) => {
    const errors = { email: "", password: "", username: "" };

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    errors.password = handlePassword(values.password);

    if (!values.username) {
      errors.username = "Username is required";
    }
    // /*
    //  * params: errors
    //  * function: remove duplicate then check if errors contains at least one error message.
    //  * returns: Object errors
    //  */
    if (new Set(Object.values(errors)).size !== 1) return errors;
  };

  return (
    <Vertical id={"signUpFromId1"}>
      <SlideArrow listForm={listOfForm} />
      <Vertical className={"form-container"}>
        <View id={"title"}>Welcome to Design Community </View>
        <View id={"log-in-text"}>
          Already have an account? <a href=" ">Log in</a>
        </View>
        <Formik
          initialValues={initialValues}
          validate={handleValidation}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleOnSubmit}
        >
          {/* handleBlur: used to identify if an input has been touched */}
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className={"form-content"} onSubmit={handleSubmit}>
              <EmailInput
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
              />
              <UserNameInput
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
              />
              <PasswordInput
                callback={() => setHide(!hide)}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />
              <CheckBoxInput
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {/* **********************************agreement Section*************************** */}
              <View id={"agreement"}>
                By creating an account, you agree to the{" "}
                <a href=" ">Terms of use</a> and <a href=" ">Privacy Policy</a>.
              </View>
              {/* **********************************Submit Section*************************** */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting
                    ? "rgba(102, 102, 102, 0.8)"
                    : "#333333",
                }}
              >
                Create an account
              </button>
              {/* ********************************************************************* */}
              <View id={"log-in-text"}>
                Already have an account? <a href=" ">Log in</a>
              </View>
            </form>
          )}
        </Formik>
      </Vertical>
    </Vertical>
  );
};
