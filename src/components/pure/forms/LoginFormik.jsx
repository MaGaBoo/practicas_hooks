import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = new Yup.ObjectSchema().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const navigate = useNavigate()
  return (
    <div>
      <h3>Login form with Formik</h3>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema} // Yup validation schema
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
          navigate('/')
        }}
      >
        {/* Obtaining props from Formik*/}
        {(props) => {
          const { touched, errors } = props;
          return (
            <Form>
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
              <button type="submit">Login</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
