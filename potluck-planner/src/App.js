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

import { EventContext } from "./contexts/EventContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [events, setEvents] = useState([{}]);
  const [user, setUser] = useState({});
  const [event, setEvent] = useState({});

  return (
    <div className="App">
      <UserContext.Provider>
        <Header />
        <Switch>
          <PrivateRoute path="/logout">
            <Logout />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <EventContext.Provider value={{ events, user, event }}>
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
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
