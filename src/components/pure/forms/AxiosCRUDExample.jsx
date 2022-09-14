import React from "react";
import {
  login,
  getAllUsers,
  getAllPagedUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID 
} from "../../../services/axiosCRUDService";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AxiosCRUDexample = () => {
  const loginSchema = new Yup.ObjectSchema().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialCredentials = {
    email: "",
    password: "",
  };

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failed!");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
        sessionStorage.removeItem("token");
      })
      .finally(() => console.log("Login succesfully done"));
  };

  // CRUD Examples

  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        alert(JSON.stringify(response.data.data));
      })
      .catch((error) => alert(`Something went wrong: ${error}`));
  };

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers()
      .then((response) => {
        alert(JSON.stringify(response.data.data));
      })
      .catch((error) => alert(`Something went wrong: ${error}`));
  };

  const obtainUserByID = (id) => {
    getUserByID(id).then((response) => {
      alert(JSON.stringify(response.data.data));
    });
  };

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data));
        } else {
            throw new Error('User not created')
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`));
  };

  const updateUser = (id, name, job) => {
    updateUserByID(id, name, job)
    .then((response) => {
        if (response.data && response.status === 200) {
            alert(JSON.stringify(response.data))
        } else {
            throw new Error('User not found, update is not completed')
        }
    })
    .catch((error) => alert(`Something went wrong: ${error}`));
  };

  const deleteUser = (id) => {
    deleteUserByID(id)
    .then((response) => {
        if (response.status === 204) {
            alert(`User ${id} successfully deleted`)
        } else {
            throw new Error('User not found, update is not completed')
        }
    })
    .catch((error) => alert(`Something went wrong: ${error}`));
  };

  return (
    <div>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema} // Yup validation schema
        onSubmit={async (values) => {
          authUser(values);
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

      {/* Example buttons to test API responses */}
      <div>
        <button onClick={obtainAllUsers}>Get all users</button>
        <button onClick={() => obtainAllPagedUsers(1)}>
          Get all paged users
        </button>
        <button onClick={() => obtainUserByID(1)}>Get user 1</button>
        <button onClick={() => createNewUser('morpheus', 'leader')}>Create new user</button>
        <button onClick={() => updateUser(1, 'morpheus', 'developer')}>Update user</button>
        <button onClick={() => deleteUser(1, 'morpheus', 'leader')}>Delete user</button>
      </div>
    </div>
  );
};

export default AxiosCRUDexample;
