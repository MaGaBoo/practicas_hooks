import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

const TaskFormik = () => {
  let task = new Task();

  const initialValues = {
    name: "",
    description: "",
    level: LEVELS.NORMAL,
  };

  const taskSchema = new Yup.object().shape({
    name: Yup.string().required("Required field"),

    description: Yup.string().required("Required field").max(
      140,
      "Description must have a maximum of 140 characters"
    ),

    level: Yup.string()
      .oneOf(
        [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], "Please, select task level")
      .required("Required field"),
  });

  return (
    <div>
      <h4>Create new tasks</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
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
            <label html="name">Task name</label>
            <Field
              id="name"
              name="name"
              placeholder="Task"
              type="text"
            />
            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div" />
            )}

            <label html="description">Task description</label>
            <Field
              id="description"
              name="description"
              placeholder="Describe your task"
              type="text"
            />
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div" />
            )}

            <label html="level">Level</label>
            <Field
              as="select"
              id="level"
              name="level"
              placeholder="level"
              type="text"
              >
              <option value="normal">{LEVELS.NORMAL}</option>
              <option value="urgent">{LEVELS.URGENT}</option>
              <option value="blocking">{LEVELS.BLOCKING}</option>
              </Field>
            {errors.level && touched.level && (
              <ErrorMessage name="level" component="div" />
            )}

            <button type="submit">Add task</button>
            {isSubmitting ? <p>Adding your task</p> : null}
          </Form>
        )}

      </Formik>
    </div>
  );
};

export default TaskFormik;
