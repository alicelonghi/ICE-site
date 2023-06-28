import { Box, Grid, TextField, styled } from "@mui/material";
import { Formik } from "formik";
import React from "react";

export default function FormContact() {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
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
          getFieldProps,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="formContact">
            {/* First name and last name */}
            <Grid container columnSpacing={2}>
              <Grid item lg={6} md={6} sx={12}>
                <TextField
                  type="text"
                  name="First name"
                  fullWidth
                  placeholder="First name"
                  {...getFieldProps("first_name")}
                  variant="standard"
                />
              </Grid>
              <Grid item lg={6} md={6} sx={12}>
                <TextField
                  type="text"
                  name="Last name"
                  fullWidth
                  placeholder="Last name"
                  {...getFieldProps("last_name")}
                  variant="standard"
                />
              </Grid>
            </Grid>
            {/* E-mail and phone */}
            <Grid container paddingTop={2} columnSpacing={2}>
              <Grid lg={6} md={6} sx={12} item>
                <TextField
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  fullWidth
                  {...getFieldProps("email")}
                  variant="standard"
                />
              </Grid>
              <Grid lg={6} md={6} sx={12} item>
                <TextField
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  fullWidth
                  {...getFieldProps("phone")}
                  variant="standard"
                />
              </Grid>
            </Grid>
            {/* Address */}
            <Grid container paddingTop={2}>
              <Grid lg={12} md={12} sx={12} item>
                <TextField
                  type="text"
                  name="address"
                  placeholder="Address"
                  fullWidth
                  {...getFieldProps("address")}
                  variant="standard"
                />
              </Grid>
            </Grid>

            {/* Subject */}
            <Grid container paddingTop={2}>
              <Grid lg={12} md={12} sx={12} item>
                <TextField
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  fullWidth
                  {...getFieldProps("subject")}
                  variant="standard"
                />
              </Grid>
            </Grid>
            {/* Message */}
            <Grid container paddingTop={2} paddingBottom={2}>
              <Grid lg={12} md={12} sx={12} sm={12}  item>
                <TextField
                  id="message"
                  placeholder="Type your message here..."
                  multiline
                  minRows={3}
                  maxRows={3}
                  style={{ width: "100%" }}
                  variant="standard"
                />
              </Grid>
            </Grid>
            <Box textAlign={"right"}>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                border: "none",
                borderRadius: "2px",
                padding: "8px 30px",
                backgroundColor: "#c1272d",
                fontSize: "18px",
                color: "#f0f0f0",
              }}
            >
              Submit
            </button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
}
