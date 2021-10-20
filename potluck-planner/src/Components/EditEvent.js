import React from "react";
import useForm from "../hooks/useForm";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button, Paper, Box, Typography, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

export default function EditEvent() {
  //ask about why empty object is needed
  const formValues = useForm({});
  const { push } = useHistory();
  const [value, setValue] = React.useState(new Date());

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
          Edit an Event
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
          <label>
            <TextField
              onChange={formValues.handleChange}
              value={formValues.values.name}
              type="text"
              name="name"
              label="Name"
              variant="outlined"
            />
          </label>
          <label>
            <TextField
              onChange={formValues.handleChange}
              value={formValues.values.name}
              type="text"
              name="location"
              label="Location"
              variant="outlined"
            />
          </label>
          <label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Date & Time"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </label>

          <Button
            sx={{
              width: "100px",
              marginTop: "10px",
            }}
            variant="contained"
          >
            Finish
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
