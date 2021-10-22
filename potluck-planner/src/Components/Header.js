import React from "react";
import {
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
  AppBar,
  Menu,
  MenuItem,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const switchCase = (param) => {
    switch (param) {
      case "a":
        return (
          <div>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant={"contained"}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem component={Link} to="/dashboard" onClick={handleClose}>
                Dashboard
              </MenuItem>
              <MenuItem component={Link} to="/logout" onClick={handleClose}>
                Logout
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Home
              </MenuItem>
            </Menu>
          </div>
        );

      case "b":
        return (
          <div>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant={"contained"}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem component={Link} to="/signup" onClick={handleClose}>
                Sign Up
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={handleClose}>
                Login
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Home
              </MenuItem>
            </Menu>
          </div>
        );
      case "c":
        return (
          <div>
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
                variant="contained"
                component={Link}
                to="/logout"
                endIcon={<LogoutIcon />}
              >
                <Typography variant="h8">Logout</Typography>
              </Button>
            </ButtonGroup>
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
        );
      case "d":
        return (
          <div>
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
        );
      default:
        break;
    }
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="h4" component="h1">
            Potluck Planner
          </Typography>
        </div>

        {matches && localStorage.getItem("token")
          ? switchCase("a")
          : matches && !localStorage.getItem("token")
          ? switchCase("b")
          : !matches && localStorage.getItem("token")
          ? switchCase("c")
          : !matches && !localStorage.getItem("token")
          ? switchCase("d")
          : ""}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
