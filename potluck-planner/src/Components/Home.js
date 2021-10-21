import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Paper,
  Box,
  Typography,
  ButtonGroup,
  Grid,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Home = () => {
  return (
    <Box
      sx={
        {
          // display: "flex",
          // justifyContent: "space-evenly",
          // alignItems: "flex-start",
          // marginTop: "200px",
        }
      }
    >
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <div
          // style={{
          //   width: "50%",
          //   height: "40vh",
          // }}
          >
            <Typography component="h1" variant="h3" color="white" mb={3}>
              Potluck Planner
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{
                lineHeight: "2.5",
                fontSize: "1.4rem",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis optio, eveniet incidunt placeat aspernatur, culpa
              facere, itaque non recusandae labore quo quas esse architecto
              error amet quidem a obcaecati consequuntur!
            </Typography>
          </div>
        </Grid>
        <Grid item lg={6}>
          <Paper
            sx={{
              display: "flex",
              flexFlow: "column wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "30vh",
              width: "30%",
              padding: "0 20px",
              opacity: "0.8",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                justifyContent: "flex-start",
              }}
            >
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
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;

//Landing page; introductory page about our app, directs you to sign up/login
