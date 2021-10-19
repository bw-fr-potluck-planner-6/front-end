import React from "react";
import useForm from "../hooks/useForm";
import { Button } from "@mui/material";

export default function EditEvent() {
  const formValues = useForm({});

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form container">
      <label>
        Name:
        <input
          onChange={formValues.handleChange}
          value={formValues.values.name}
          type="text"
        />
      </label>
      <label>
        Date:
        <input
          onChange={formValues.handleChange}
          value={formValues.values.date}
          type="date"
        />
      </label>
      <label>
        Time:
        <input
          onChange={formValues.handleChange}
          value={formValues.values.time}
          type="time"
        />
      </label>
      <label>
        Location:
        <input
          onChange={formValues.handleChange}
          value={formValues.values.location}
          type="text"
        />
      </label>
      <Button variant="contained">Submit</Button>
    </form>
  );
}
