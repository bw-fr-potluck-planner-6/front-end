import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import {
  Button,
  Paper,
  Box,
  Typography,
  TextField,
  Grid,
  Checkbox,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import FastfoodIcon from "@mui/icons-material/Fastfood";

//Works now
// const initialEvent = {
//   potluck_name: "",
//   date: "",
//   time: "",
//   location: "",
//   foods: [
//     {
//       food_name: "",
//     },
//     {
//       food_name: "",
//     },
//   ],
// guests: [
//   {
//     username: "",
//     food_name: "",
//     accepted: false,
//     guest_id: 1,
//     potluck_food_id: 1,
//   },
//   {
//     username: "ehsan",
//     food_name: "hamberger",
//     accepted: false,
//     guest_id: 2,
//     potluck_food_id: 2,
//   },
// ],
// };
export default function CreateEvent() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodItem, setFoodItem] = useState("");
  const formValues = useForm({
    potluck_name: "",
    date: "",
    time: "",
    location: "",
    foods: [],
  });
  const { push } = useHistory();

  const handleFoodSubmit = (e) => {
    // const newFood = {
    //   food_name: foodItem,
    // };
    const newFormValues = {
      ...formValues.values,
      foods: [...formValues.values.foods, foodItem],
    };
    formValues.setValues(newFormValues);
    setFoodItems(formValues.values.foods);
  };

  const handleFoodChange = ({ target: { value } }) => {
    setFoodItem(value);
  };

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
  console.log(foodItems);
  return (
    <Box>
      <Grid container justifyContent={"space-evenly"}>
        <Grid item lg={4} md={6} sm={8} xs={10} mt={17.5}>
          <Paper
            elevation={20}
            sx={{
              height: "75vh",
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
              onSubmit={handleFoodSubmit}
            >
              <TextField
                onChange={formValues.handleChange}
                value={formValues.values.name}
                type="text"
                name="potluck_name"
                label="Name"
                variant="outlined"
                // helperText="Name"
              />
              <TextField
                onChange={formValues.handleChange}
                value={formValues.values.location}
                type="text"
                name="location"
                label="Location"
                variant="outlined"
                // helperText="Location"
              />
              <TextField
                name="date"
                type="date"
                helperText="Date:"
                // label="Date"
                onChange={formValues.handleChange}
                value={formValues.values.date}
                sx={{
                  width: "223px",
                }}
              />
              <TextField
                name="time"
                type="time"
                helperText="Time:"
                onChange={formValues.handleChange}
                value={formValues.values.time}
                sx={{
                  width: "223px",
                }}
              />
              <TextField
                onChange={handleFoodChange}
                value={foodItem}
                type="text"
                name="food_name"
                label="Food Item"
                variant="outlined"
                // helperText="Name"
              />
              <Button
                sx={{
                  width: "100px",
                  marginTop: "10px",
                }}
                variant="contained"
                onClick={handleFoodSubmit}
                endIcon={<FastfoodIcon />}
              >
                Add Food
              </Button>
              <Button
                sx={{
                  width: "100px",
                  marginTop: "10px",
                }}
                variant="contained"
                onClick={handleEventSubmit}
                type="submit"
                endIcon={<EventIcon />}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={8} xs={10} mt={17.5}>
          <Paper
            elevation={20}
            sx={{
              height: "75vh",
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
              Requested Foods:
            </Typography>

            {foodItems.map((food) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  size="large"
                  sx={{
                    alignSelf: "center",
                  }}
                ></Checkbox>
                <Typography
                  variant="h4"
                  sx={{
                    marginLeft: "5%",
                  }}
                >
                  <i>{food}</i>
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
