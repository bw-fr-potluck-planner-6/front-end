import React, { useContext } from "react";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography, TextField } from "@mui/material";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import { UserContext } from "../contexts/UserContext";
const Login = () => {
  const formValues = useForm({});
  const { push } = useHistory();
  const { setUser } = useContext(UserContext);

  const handleUserLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/users/login", formValues.values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.message);
        push("/dashboard");
      })
      .catch((err) => console.log(err));
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
          width: "30%",
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
              value={formValues.values.username}
              name="username"
              type="username"
              label="Username"
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
