import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { EventContext } from "../contexts/EventContext";
const Dashboard = () => {
  const user = useContext(UserContext);
  const events = useContext(EventContext);
  const event = useContext(EventContext);
  return (
    <div>
      <h1>Dashboard under construction</h1>
    </div>
  );
};

export default Dashboard;
