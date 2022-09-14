import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  let user = new User();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login')
  }

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = new Yup.object().shape({
    username: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(10, "Name is too long!")
      .required(),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a role")
      .required("Required field"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),

    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Something went wrong!"
        ),
      })
      .required("Must confirm the password"),
  });

  const submit = (values) => {
    alert("register user");
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label html="username">Username</label>
            <Field
              id="username"
              name="username"
              placeholder="Your username"
              type="text"
            />
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div" />
            )}

            <label html="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label html="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <label html="confirm">Confirm password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Confirm your password"
              type="password"
            />
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="password" component="div" />
            )}

            <button type="submit">Register account</button>
            {isSubmitting ? { goToLogin } : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
