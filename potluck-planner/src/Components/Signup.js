import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import { Button } from "@mui/material";

const Signup = () => {
  const formValues = useForm({});
  const { push } = useHistory();

  const handleUserSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      //need to add proper url
      .post("/users/", formValues.values)
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
      <form onSubmit={handleUserSubmit}>
        <h3>Signup Information</h3>
        <label>
          First Name:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.firstName}
            name="firstName"
            type="text"
          />
        </label>
        <label>
          Last Name:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.lastName}
            name="lastName"
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.email}
            name="email"
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.password}
            name="password"
            type="password"
          />
        </label>
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default Signup;
