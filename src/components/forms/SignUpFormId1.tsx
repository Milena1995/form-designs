import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { View } from "app-studio";
import { Horizontal, Vertical } from "../../layout/layout";
import { SlideArrow } from "../SlideArrows";
import { listOfForm } from "../../pages/home";
import { EmailInput } from "../inputs/EmailInput";
import { UserNameInput } from "../inputs/UserNameInput";
import { PasswordInput } from "../inputs/PasswordInput";
import { CheckBoxInput } from "../inputs/CheckBox";

import styleForm1 from "../../stylesheet/SignUpFormId1.module.scss";

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

  const errorTypes = (passwordValue: any) => {
    return [
      {
        id: "more-characters",
        regex: passwordValue.length < 8,
        text: "Use 8 or more characters",
      },
      {
        id: "uppercase",
        regex: !/[A-Z]/.test(passwordValue),
        text: "One Uppercase character",
      },
      {
        id: "lowercase",
        regex: !/[a-z]/.test(passwordValue),
        text: "One lowercase character",
      },
      {
        id: "special-characters",
        regex: !/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(passwordValue),
        text: "One special character",
      },
      {
        id: "one-character",
        regex: !/\d/.test(passwordValue),
        text: "One number",
      },
    ];
  };

  const handlePassword = (passwordValue: any) => {
    let error: any = "";
    const errorInfos: any = errorTypes(passwordValue);

    for (var i = 0; i < errorInfos.length; i++) {
      const name = document.getElementById(errorInfos[i].id);
      if (name) {
        if (errorInfos[i].regex) {
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
  const ErrorMessage = () => {
    return (
      <Horizontal>
        <ul className={styleForm1.unordered_list}>
          {errorTypes("").map((error) => (
            <li id={error.id} key={error.id}>
              {error.text}
            </li>
          ))}
        </ul>
      </Horizontal>
    );
  };
  return (
    <Vertical className={styleForm1.signUpFromId1}>
      <SlideArrow listForm={listOfForm} />
      <Vertical className={styleForm1.form_container}>
        <View className={styleForm1.title}>Welcome to Design Community </View>
        <View className={styleForm1.log_in_text}>
          Already have an account? <a href="/login.html">Log in</a>
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
          }) => {
            return (
              <form className={styleForm1.form_content} onSubmit={handleSubmit}>
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
                  hide={hide}
                  errorMessage={ErrorMessage}
                />
                <CheckBoxInput
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                {/* **********************************agreement Section*************************** */}
                <View className={styleForm1.agreement}>
                  By creating an account, you agree to the{" "}
                  <a href=" ">Terms of use</a> and{" "}
                  <a href=" ">Privacy Policy</a>.
                </View>
                {/* **********************************Submit Section*************************** */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting
                      ? "rgba(102, 102, 102, 0.6)"
                      : "#333333",
                  }}
                >
                  Create an account
                </button>
                {/* ********************************************************************* */}
                <View className={styleForm1.log_in_text}>
                  Already have an account? <a href="/login.html">Log in</a>
                </View>
              </form>
            );
          }}
        </Formik>
      </Vertical>
    </Vertical>
  );
};
