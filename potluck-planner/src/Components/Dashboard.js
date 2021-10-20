import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { EventContext } from "../contexts/EventContext";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const user = useContext(UserContext);
  const event = useContext(EventContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography variant="h1" color="white">
          Dashboard
        </Typography>
      </div>
      <Button variant="contained" component={Link} to="/create">
        Add New Event
      </Button>
    </Box>
  );
};

export default Dashboard;
