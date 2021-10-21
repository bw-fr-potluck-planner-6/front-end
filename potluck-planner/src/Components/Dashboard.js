import React, { useEffect, useState, useContext } from "react";
import { Button, Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import Event from "./Event";
import { useHistory } from "react-router";
const Dashboard = () => {
  const [events, setEvents] = useState([{}]);
  const { push } = useHistory();
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
      {/* need to capitalize the username with JS!! */}
      <div>
        <Typography variant="h2" color="white">
          {localStorage.getItem("username")}!
        </Typography>
      </div>
      <Button variant="contained" component={Link} to="/create">
        Add New Event
      </Button>
      <Grid container spacing={1} justifyContent={"space-evenly"}>
        {events.map((event) => (
          <Grid item lg={2.5} md={4} xs={10} margin={2}>
            <Event
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
