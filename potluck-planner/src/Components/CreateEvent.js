import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography, TextField, Grid } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

//Works now

export default function CreateEvent() {
  //ask about why empty object is needed
  const formValues = useForm({});
  const { push } = useHistory();

  const handleEventSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/potlucks/", formValues.values)
      .then((res) => {
        push("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box>
      <Grid container justifyContent={"center"}>
        <Grid item lg={4} md={6} sm={8} xs={10} mt={17.5}>
          <Paper
            elavation={20}
            sx={{
              height: "55vh",
              minHeight: "500px",
              paddingTop: "2.5%",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              sx={{
                marginTop: "30px",
              }}
            >
              Add an Event
            </Typography>
            <form
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                gap: "10px",
                paddingTop: "30px",
              }}
            >
              <TextField
                onChange={formValues.handleChange}
                value={formValues.values.name}
                type="text"
                name="potluck_name"
                label="Name"
                variant="outlined"
              />
              <TextField
                onChange={formValues.handleChange}
                value={formValues.values.location}
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
                onClick={handleEventSubmit}
                endIcon={<EventIcon />}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
