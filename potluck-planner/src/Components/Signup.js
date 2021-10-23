import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography, TextField, Grid } from "@mui/material";

const Signup = () => {
  const formValues = useForm({});
  const { push } = useHistory();

  const handleUserSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/users/register", formValues.values)
      .then((res) => {
        push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box>
      <Grid container justifyContent={"center"} mt={17.5}>
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <Paper
            elevation={10}
            sx={{
              height: "50vh",
              minHeight: "400px",
              opacity: "0.95",
              padding: "2.5% 0",
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
                  value={formValues.values.username}
                  name="username"
                  type="text"
                  label="Username"
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
                onClick={handleUserSubmit}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
