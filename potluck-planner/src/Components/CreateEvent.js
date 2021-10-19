import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import { Button } from "@mui/material";

export default function CreateEvent() {
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
    <div>
      <h2>Add an Event</h2>
      <form onSubmit={handleEventSubmit}>
        <label>
          Name:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.name}
            type="text"
            name="name"
          />
        </label>
        <label>
          Date:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.date}
            type="date"
            name="date"
          />
        </label>
        <label>
          Time:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.time}
            type="time"
            name="time"
          />
        </label>
        <label>
          Location:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.location}
            type="text"
            name="location"
          />
        </label>
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}
