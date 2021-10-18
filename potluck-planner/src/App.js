import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import CreateEvent from "./Components/CreateEvent";
import EditEvent from "./Components/EditEvent";
import { EventContext } from "./contexts/EventContext";
import { UserContext } from "./contexts/UserContext";
const initialEvent = {
  name: "Test Name",
  date: "Oct 18, 2021",
  location: "Lambdaville",
  foodItems: ["pizza", "oreos", "gabagool"],
};

const initialUser = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@email.com",
};

function App() {
  const [events, setEvents] = useState([{}]);
  const [user, setUser] = useState(initialUser);
  const [event, setEvent] = useState(initialEvent);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />
        <Switch>
          <PrivateRoute path="/logout">
            <Logout />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <EventContext.Provider value={(events, event)}>
              <Dashboard />
            </EventContext.Provider>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreateEvent />
          </Route>
          <Route path="/edit">
            <EditEvent />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
