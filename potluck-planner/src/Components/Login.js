import React from "react";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography, TextField } from "@mui/material";

const Login = () => {
  const formValues = useForm({});

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
      sx={{
        width: "50%",
        height:"40vh",
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
            marginTop:"30px",
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
            sx={{
              width:"100px",
              marginTop: "10px"
            }}
          variant="contained">Login</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
