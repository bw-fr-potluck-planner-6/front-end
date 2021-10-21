import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import CreateEvent from "./Components/CreateEvent";
import EditEvent from "./Components/EditEvent";
import { UserContext } from "./contexts/UserContext";
// import { EventContext } from "./contexts/EventContext";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Header />

      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <PrivateRoute path="/logout">
            <Logout />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
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
          <PrivateRoute path="/create">
            <CreateEvent />
          </PrivateRoute>
          <PrivateRoute path="/edit">
            <EditEvent />
          </PrivateRoute>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
