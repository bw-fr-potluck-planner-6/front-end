import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography } from "@mui/material";

const Signup = () => {
  const formValues = useForm({});
  const { push } = useHistory();

  const handleUserSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      //need to add proper url
      .post("/users/", formValues.values)
      .then((res) => {
        // console.log("submitted, returned: ", res);

        push("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexFlow: "column wrap",
        marginTop: "100px",
      }}
    >
      {" "}
      <Typography
        component="h1"
        variant="h3"
        sx={{
          marginBottom: "50px",
        }}
      >
        Create Account
      </Typography>
      <Paper
        elevation={10}
        sx={{
          height: "40vh",
          width: "60%",
        }}
      >
        <form
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            paddingTop: "60px",
          }}
          onSubmit={handleUserSubmit}
        >
          <label>
            First Name:{" "}
            <input
              onChange={formValues.handleChange}
              value={formValues.values.firstName}
              name="firstName"
              type="text"
            />
          </label>
          <label>
            Last Name:{" "}
            <input
              onChange={formValues.handleChange}
              value={formValues.values.lastName}
              name="lastName"
              type="text"
            />
          </label>
          <label>
            Email:{" "}
            <input
              onChange={formValues.handleChange}
              value={formValues.values.email}
              name="email"
              type="text"
            />
          </label>
          <label>
            Password:{" "}
            <input
              onChange={formValues.handleChange}
              value={formValues.values.password}
              name="password"
              type="password"
            />
          </label>
          <Button
            sx={{
              width: "100px",
              marginTop: "10px",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
