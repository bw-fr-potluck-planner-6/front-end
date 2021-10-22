import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const EventListItem = (props) => {
  const { potluck_id, potluck_name, date, location, time } = props.event;
  //I AM NOT RERENDERING AFTER DELETE, NEED TO FIX

  return (
    <Paper
      sx={{
        opacity: ".925",
        height: "30vh",
        paddingTop: "10%",
        display: "flex",
        flexFlow: "column wrap",
        gap: "5%",
        alignItems: "flex-start",
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
        {potluck_name}
      </Typography>
      <Typography variant="h5" color="initial">
        <span style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}>
          Date:{" "}
        </span>{" "}
        {date}
      </Typography>
      <Typography variant="h5" color="initial">
        <span style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}>
          Location:{"  "}
        </span>
        {location}
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
        {time}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/dashboard/${potluck_id}`}
        sx={{
          alignSelf: "center",
          width: "100px",
        }}
      >
        View
      </Button>
    </Paper>
  );
};

export default EventListItem;
