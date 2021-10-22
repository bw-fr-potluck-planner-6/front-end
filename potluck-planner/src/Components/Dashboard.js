import React, { useEffect, useState } from "react";
import { Button, Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import EventListItem from "./EventListItem";
import EventIcon from "@mui/icons-material/Event";

const Dashboard = () => {
  const [events, setEvents] = useState([{}]);

  const welcome = localStorage.getItem("user");

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/potlucks`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        // justifyContent: "space-around",
      }}
    >
      {/* need to capitalize the username with JS!! */}
      <div>
        <Typography variant="h2" color="white" pt={5}>
          {welcome.toUpperCase()}
        </Typography>
      </div>
      <Button
        variant="contained"
        component={Link}
        to="/create"
        endIcon={<EventIcon />}
        sx={{
          margin: "2.5% 0",
        }}
      >
        New Event
      </Button>
      <Grid container spacing={1} justifyContent={"space-evenly"}>
        {events.map((event) => (
          <Grid item lg={2.5} md={4} xs={10} margin={2}>
            <EventListItem
              key={event.potluck_id}
              event={event}
              events={events}
              setEvents={setEvents}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
