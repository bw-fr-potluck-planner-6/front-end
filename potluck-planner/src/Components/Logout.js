import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { LoggedInContext } from "../contexts/LoggedInContext";

const Logout = () => {
  const { push } = useHistory();
  const { setIsLoggedIn } = useContext(LoggedInContext);

  useEffect(() => {
    localStorage.removeItem("token");
    push("/login");
    setIsLoggedIn(false);
  });

  return <div></div>;
};

export default Logout;
