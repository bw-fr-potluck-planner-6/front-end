import React, { useContext, useEffect } from "react";
import {
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
  AppBar,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../contexts/LoggedInContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" component="h1">
          Potluck Planner
        </Typography>
        <div>
          {!isLoggedIn ? (
            <ButtonGroup>
              <Button
                variant="contained"
                component={Link}
                to="/signup"
                endIcon={<AssignmentIcon />}
              >
                <Typography variant="h8">Sign Up</Typography>
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/login"
                endIcon={<LoginIcon />}
              >
                <Typography variant="h8">Login</Typography>
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <Button
                variant="contained"
                component={Link}
                to="/dashboard"
                endIcon={<DashboardIcon />}
              >
                <Typography variant="h8">Dashboard</Typography>
              </Button>
              <Button
                onClick={() => setIsLoggedIn(false)}
                variant="contained"
                component={Link}
                to="/logout"
                endIcon={<LogoutIcon />}
              >
                <Typography variant="h8">Logout</Typography>
              </Button>
            </ButtonGroup>
          )}
          <Button
            variant="contained"
            component={Link}
            to="/"
            endIcon={<HomeIcon />}
            sx={{
              marginLeft: "30px",
            }}
          >
            Home
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
