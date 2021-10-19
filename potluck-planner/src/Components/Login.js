import React from "react";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <div>
      <h1>User Login</h1>
      <form>
        <label>
          Email:
          <input name="email" type="text" />
        </label>

        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
