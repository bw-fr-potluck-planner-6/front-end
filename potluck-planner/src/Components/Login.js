import React from "react";

const Login = () => {
  return (
    <div>
      <h1>User Login</h1>
      <form  >
      <button>login</button>
      <div>
        <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            name='email'
            type='text'
          />
        </label>
        <div>
        <label>Password&nbsp;&nbsp;
          <input
            name='password'
            type='password'
          />
        </label>
        </div>
        </div>
        </form> 
    </div>
  );
};

export default Login;
