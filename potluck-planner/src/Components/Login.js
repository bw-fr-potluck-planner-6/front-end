import React from "react";
import useForm from "../hooks/useForm";
import { Button } from "@mui/material";

const Login = () => {
  const formValues = useForm({});

  return (
    <div>
      <h1>User Login</h1>
      <form>
        <label>
          Email:
          <input
            onChange={formValues.handleChange}
            value={formValues.values.email}
            name="email"
            type="email"
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
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
