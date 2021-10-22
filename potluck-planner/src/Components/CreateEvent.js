import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import { Button, Paper, Box, Typography, TextField, Grid } from "@mui/material";
// import TimePicker from "@mui/lab/TimePicker";
// import DatePicker from "@mui/lab/DatePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

export default function CreateEvent() {
  //ask about why empty object is needed

  const formValues = useForm({});
  const { push } = useHistory();
  // const [value, setValue] = useState(new Date());

  // const handleDTChange = (e) => {
  //   let newValues = value;
  //   newValues = e;
  //   setValue(newValues);
  //   console.log(e);
  // };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/potlucks/", formValues.values)
      .then((res) => {
        console.log("submitted, returned: ", res);
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
                gap: "20px",
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
              <input
                type="date"
                name="date"
                onChange={formValues.handleChange}
                value={formValues.values.date}
              />
              <input
                type="time"
                name="time"
                onChange={formValues.handleChange}
                value={formValues.values.time}
              />
              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={value}
                  onChange={handleDTChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Time"
                  value={value}
                  onChange={handleDTChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> */}
              <Button
                sx={{
                  width: "100px",
                  marginTop: "10px",
                }}
                variant="contained"
                onClick={handleEventSubmit}
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
