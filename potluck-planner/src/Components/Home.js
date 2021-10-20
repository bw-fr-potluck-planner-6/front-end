import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper, Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="background">
      <Typography variant="h1" color="primary">
        Potluck-Home Page
      </Typography>
      <Typography variant="h4" color="secondary">
        Potluck Description
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Paper
          sx={{
            height: "40vh",
            width: "30%",
          }}
        >
          <Typography variant="p" component="p">
            Ready to get started planning your potlucks?
          </Typography>
          <Button
            sx={{
              width: "100px",
              margin: "10px",
            }}
            variant="contained"
            component={Link}
            to="/signup"
          >
            Signup
          </Button>
          <Button
            sx={{
              width: "100px",
              margin: "10px",
            }}
            variant="contained"
            component={Link}
            to="/login"
          >
            login
          </Button>
        </Paper>
        <Paper
          sx={{
            height: "40vh",
            width: "30%",
          }}
        ></Paper>
      </Box>
    </div>
  );
};
export default Home;

//Landing page; introductory page about our app, directs you to sign up/login
