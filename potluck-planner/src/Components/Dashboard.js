import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { EventContext } from "../contexts/EventContext";
const Dashboard = () => {
  const user = useContext(UserContext);
  const events = useContext(EventContext);
  const event = useContext(EventContext);
  return (
    <div>
      <h1>{event.name}</h1>
      <h2>{user.firstName}</h2>
    </div>
  );
};

export default Dashboard;
