import React from "react";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import "./form.css";

function InputData(props) {
  return (
    <div className="main_container ">
      <div>
        <p className="m-1.5 text-2xl">Lets Get Started With Us!</p>
      </div>

      <div className="main_ui ">
        <Formik
          initialValues={{
             _id: props.userData && props.userData._id ? props.userData._id : "",
              name: props.userData && props.userData.name ? props.userData.name : "",
              contact: props.userData && props.userData.contact ? props.userData.contact :"",
              email: props.userData && props.userData.email ? props.userData.email : "",
          }}
          onSubmit={(data) => {
            console.log(data);
            props.got(data);
          }}
        >
          {({ submitForm }) => (
            <Form>
              <Field
                component={TextField}
                type="name"
                label="name"
                name="name"
                fullWidth
                className=""
              />
              <Field
                component={TextField}
                type="number"
                label="number"
                name="contact"
                fullWidth
              />
              <Field
                component={TextField}
                type="email"
                label="email"
                name="email"
                fullWidth
              />
              <Button variant="contained" color="primary" onClick={submitForm}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default InputData;
