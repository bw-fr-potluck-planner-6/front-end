import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
const Dashboard = () => {
  const [events, setEvents] = useState([{}]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/potlucks`)
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(`events are here: ${events}`);
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
      <div>
        {events.map((event) => (
          <div key={event.potluck_id}>
            <h3>{event.potluck_name}</h3>
            <h3>{event.potluck_date}</h3>
            <h3>{event.location}</h3>
            <h3>{event.time}</h3>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Dashboard;
