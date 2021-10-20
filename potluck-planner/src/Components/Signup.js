import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography, TextField } from "@mui/material";

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
      <Paper
        elevation={10}
        sx={{
          height: "55vh",
          width: "50%",
          minHeight: "400px",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            marginTop: "30px",
          }}
        >
          Create Account
        </Typography>
        <form
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            gap: "20px",
            paddingTop: "30px",
          }}
          onSubmit={handleUserSubmit}
        >
          <label>
            <TextField
              onChange={formValues.handleChange}
              value={formValues.values.firstName}
              name="firstName"
              type="text"
              label="First Name"
              variant="outlined"
              id="outlined-required"
              required
            />
          </label>
          <label>
            <TextField
              onChange={formValues.handleChange}
              value={formValues.values.lastName}
              name="lastName"
              type="text"
              label="Last Name"
              variant="outlined"
              id="outlined-required"
              required
            />
          </label>
          <label>
            <TextField
              onChange={formValues.handleChange}
              value={formValues.values.email}
              name="email"
              type="text"
              label="Email"
              variant="outlined"
              id="outlined-required"
              required
            />
          </label>
          <label>
            <TextField
              onChange={formValues.handleChange}
              value={formValues.values.password}
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              id="outlined-required"
              required
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
