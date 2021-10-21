import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../contexts/UserContext";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const { push } = useHistory();
  useEffect(() => {
    localStorage.removeItem("token");
    setUser("");
    push("/login");
  });

  return <div></div>;
};

export default Logout;
