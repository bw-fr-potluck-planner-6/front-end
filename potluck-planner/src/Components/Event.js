import React, { useEffect, useState } from "react";
import { Paper, Typography, Button, ButtonGroup, Box } from "@mui/material";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
const initialEvent = {
  potluck_id: 1,
  potluck_name: "rowValue1",
  date: "2021-09-30T07:00:00.000Z",
  time: "12:00:00",
  location: "U.S.A",
  foods: [
    {
      food_name: "spaghetti",
    },
    {
      food_name: "hamberger",
    },
  ],
  guests: [
    {
      username: "ehsan",
      food_name: "spaghetti",
      accepted: false,
      guest_id: 1,
      potluck_food_id: 1,
    },
    {
      username: "ehsan",
      food_name: "hamberger",
      accepted: false,
      guest_id: 2,
      potluck_food_id: 2,
    },
  ],
};

//ADD A LOADER SPINNER OR SOMETHING WHILE DATA IS BEING FETCHED

const Event = (props) => {
  const [event, setEvent] = useState(initialEvent);
  const { push } = useHistory();
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/potlucks/${id}`)
      .then((res) => {
        setEvent(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/potlucks/${id}`)
      .then((res) => {
        props.setEvents(
          props.events.filter((event) => event.potluck_id !== +id)
        );
        push("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  console.log(event.foods);
  return (
    <Paper
      sx={{
        opacity: ".925",
        height: "50vh",
        margin: "10%",
        // paddingTop: "10%",
        display: "flex",
        flexFlow: "column wrap",
        gap: "5%",
        alignItems: "center",
        justifyContent: "center",
        h5: {
          paddingLeft: "5%",
        },
      }}
      elevation={20}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
        variant="h3"
        color="primary"
      >
        {event.potluck_name}
      </Typography>
      <Box
        sx={{
          width: "40%",
          display: "flex",
          flexFlow: "column",
          textAlign: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" color="initial">
          <span
            style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Date:
          </span>{" "}
          {event.date}
        </Typography>
        <Typography variant="h5" color="initial">
          <span
            style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Location:{"  "}
          </span>
          {event.location}
        </Typography>
        <Typography variant="h5" color="initial">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "red",
            }}
          >
            Time:{" "}
          </span>
          {event.time}
        </Typography>
        <Typography variant="h5">
          <span
            style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Food:
          </span>
        </Typography>
        <Typography variant="h6">
          {event.foods.map((food) => food.food_name)}
        </Typography>
        <Typography variant="h5" color="initial">
          {event.guests.map((guest) => `Guests: ${guest.username}`)}
        </Typography>
      </Box>
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/edit"
          sx={{
            alignSelf: "center",
            width: "100px",
          }}
        >
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="error"
          component={Link}
          to="/dashboard"
          sx={{
            alignSelf: "center",
            width: "100px",
          }}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default Event;
