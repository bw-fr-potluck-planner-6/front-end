import React from "react";
import { Paper, Typography, Button, ButtonGroup } from "@mui/material";

const Event = (props) => {
  const { potluck_name, date, location, time } = props.event;
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
      <ButtonGroup
        sx={{
          alignSelf: "center",
        }}
      >
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default Event;
