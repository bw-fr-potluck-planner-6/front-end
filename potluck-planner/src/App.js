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
import { LoggedInContext } from "./contexts/LoggedInContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  return (
    <div className="App">
      <UserContext.Provider value={(user, setUser)}>
        <LoggedInContext.Provider value={isLoggedIn}>
          <Header />
        </LoggedInContext.Provider>
        <Switch>
          <PrivateRoute path="/logout">
            <LoggedInContext.Provider value={setIsLoggedIn}>
              <Logout />
            </LoggedInContext.Provider>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <LoggedInContext.Provider value={setIsLoggedIn}>
              <Login />
            </LoggedInContext.Provider>
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
