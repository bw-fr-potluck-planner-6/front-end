import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { EventContext } from "../contexts/EventContext";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
const Dashboard = () => {
  const user = useContext(UserContext);
  const event = useContext(EventContext);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/potlucks")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
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
