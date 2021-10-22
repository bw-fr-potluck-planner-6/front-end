import React, { useContext } from "react";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography, TextField, Grid } from "@mui/material";
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
        localStorage.setItem("user", res.data.message);
        setUser(res.data.message);
        push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Grid container justifyContent={"center"} mt={17.5}>
        <Grid item lg={3} md={5} sm={7} xs={9}>
          <Paper
            elevation={20}
            sx={{
              height: "40vh",
              minHeight: "400px",
              paddingTop: "2.5%",
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
              <TextField
                onChange={formValues.handleChange}
                value={formValues.values.username}
                name="username"
                type="username"
                label="Username"
                required
              />

              <TextField
                onChange={formValues.handleChange}
                value={formValues.values.password}
                name="password"
                type="password"
                label="Password"
                required
              />

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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
