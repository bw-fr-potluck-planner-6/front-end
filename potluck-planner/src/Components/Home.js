import React from "react";
import { Button, Paper, Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="background">
<<<<<<< HEAD
      <h1>Potluck-Home Page</h1>
      <p>Potluck Description</p>
=======
      <Typography variant="h1" color="primary">
        Potluck-Home Page
      </Typography>
      <Typography variant="h4" color="secondary">
        Potluck Description
      </Typography>

>>>>>>> 33f8ccf2336534652fbb9571da71b98bf2786b39
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Button
          sx={{
            width: "100px",
            margin: "10px",
          }}
          variant="contained"
        >
          Signup
        </Button>
        <Button
          sx={{
            width: "100px",
            margin: "10px",
          }}
          variant="contained"
        >
          login
        </Button>
      </Box>
    </div>
  );
};
export default Home;

//Landing page; introductory page about our app, directs you to sign up/login
