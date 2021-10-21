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

  const handleLog = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <UserContext.Provider value={(user, setUser)}>
        <LoggedInContext.Provider value={(isLoggedIn, handleLog)}>
          <Header />
        </LoggedInContext.Provider>
        <Switch>
          <LoggedInContext.Provider value={(isLoggedIn, setIsLoggedIn)}>
            <PrivateRoute path="/logout">
              <Logout />
            </PrivateRoute>
          </LoggedInContext.Provider>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <LoggedInContext.Provider value={(isLoggedIn, setIsLoggedIn)}>
            <Route path="/login">
              <Login />
            </Route>
          </LoggedInContext.Provider>
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
