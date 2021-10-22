import React from "react";
import useForm from "../hooks/useForm";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button, Paper, Box, Typography, TextField } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

// NO PUT FOR POTLUCKS IN DB

export default function EditEvent() {
  //ask about why empty object is needed
  const formValues = useForm({});
  const { push } = useHistory();

  const handleEventSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      //need to add proper url
      .post("/events/", formValues)
      .then((res) => {
        // console.log("submitted, returned: ", res);

        push("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexFlow: "column wrap",
        marginTop: "100px",
      }}
    >
      <Paper
        elavation={10}
        sx={{
          height: "55vh",
          width: "50%",
          minHeight: "500px",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            marginTop: "30px",
          }}
        >
          Edit Event
        </Typography>
        <form
          style={{
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            gap: "20px",
            paddingTop: "30px",
          }}
          onSubmit={handleEventSubmit}
        >
          <TextField
            onChange={formValues.handleChange}
            value={formValues.values.name}
            type="text"
            name="name"
            label="Name"
            variant="outlined"
          />

          <TextField
            onChange={formValues.handleChange}
            value={formValues.values.name}
            type="text"
            name="location"
            label="Location"
            variant="outlined"
          />

          <TextField
            name="date"
            type="date"
            label="Date"
            onChange={formValues.handleChange}
            value={formValues.values.date}
            sx={{
              width: "223px",
            }}
          />
          <TextField
            name="time"
            type="time"
            label="Time"
            onChange={formValues.handleChange}
            value={formValues.values.time}
            sx={{
              width: "223px",
            }}
          />
          <Button
            sx={{
              width: "100px",
              marginTop: "10px",
            }}
            variant="contained"
            endIcon={<EventIcon />}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
