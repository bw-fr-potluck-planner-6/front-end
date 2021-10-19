import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: "",
  date: "",
  time: "",
  location: "",
};

export default function CreateEvent(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

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
    <form onSubmit={handleEventSubmit} className="form container">
      <div>
        <h1>Event form goes here.</h1>
        {/* name section */}

        <div className="name">
          <label>
            Name
            <input
              onChange={handleChange}
              value={formValues.name}
              type="text"
              name="name"
            />
          </label>
        </div>

        {/* date section */}

        <div className="date container">
          <label>
            Date
            <input
              onChange={handleChange}
              value={formValues.date}
              type="date"
              name="date"
            />
          </label>
        </div>

        {/* time section */}

        <div className="time container">
          <label>
            Time
            <input
              onChange={handleChange}
              value={formValues.time}
              type="time"
              name="time"
            />
          </label>
        </div>

        <div className="location">
          <label>
            Location
            <input
              onChange={handleChange}
              value={formValues.location}
              type="text"
              name="location"
            />
          </label>
        </div>

        <button>text submit</button>
      </div>
    </form>
  );
}
