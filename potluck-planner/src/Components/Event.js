import React, { useEffect } from "react";
import { Paper, Typography, Button } from "@mui/material";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Event = (props) => {
  //   const { potluck_id, potluck_name, date, location, time } = props.event;
  const { push } = useHistory();
  const { id } = useParams();
  //I AM NOT RERENDERING AFTER DELETE, NEED TO FIX

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/potlucks/${id}`)
      .then((res) => console.log(res));
  }, []);
  const handleDelete = (id) => {
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
        test1 {/* {potluck_name} */}
      </Typography>
      <Typography variant="h5" color="initial">
        <span style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}>
          Date:{" "}
        </span>{" "}
        test2 {/* {date} */}
      </Typography>
      <Typography variant="h5" color="initial">
        <span style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}>
          Location:{"  "}
        </span>
        test3 {/* {location} */}
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
        {/* {time} */}
      </Typography>
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
        variant="contained"
        color="error"
        component={Link}
        to="/edit"
        sx={{
          alignSelf: "center",
          width: "100px",
        }}
      >
        Delete
      </Button>
    </Paper>
  );
};

export default Event;
