import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper, Box, Typography, ButtonGroup } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
            padding: "0 20px",
          }}
        ></Paper>
        <Paper
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "40vh",
            width: "30%",
            padding: "0 20px",
          }}
        >
          <Typography variant="p" component="p">
            Ready to get started planning your potlucks?
          </Typography>
          <ButtonGroup>
            <Button
              variant="contained"
              component={Link}
              to="/signup"
              endIcon={<AssignmentIcon />}
            >
              <Typography variant="h8">Sign up</Typography>
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/login"
              endIcon={<LoginIcon />}
            >
              <Typography variant="h8">login</Typography>
            </Button>
          </ButtonGroup>
        </Paper>
      </Box>
    </div>
  );
};
export default Home;

//Landing page; introductory page about our app, directs you to sign up/login
