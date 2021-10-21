import React from "react";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography, TextField } from "@mui/material";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";

const Login = () => {
  const formValues = useForm({});
  const { push } = useHistory();

  const handleUserLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://potluckaapi.herokuapp.com/api/users/login",
        formValues.values
      )
      .then((res) => {
        console.log("submitted, returned: ", res);

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
          width: "50%",
          height: "40vh",
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
          Login
        </Typography>
        <form
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <label>
            <TextField
              onChange={formValues.handleChange}
              value={formValues.values.email}
              name="email"
              type="email"
              label="Email"
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
              id="outlined-required"
              required
            />
          </label>
          <Button
            onClick={handleUserLogin}
            sx={{
              width: "100px",
              marginTop: "10px",
            }}
            variant="contained"
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
