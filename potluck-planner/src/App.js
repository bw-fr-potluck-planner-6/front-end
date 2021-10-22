import "./App.css";
import { Switch } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import CreateEvent from "./Components/CreateEvent";
import EditEvent from "./Components/EditEvent";
import { UserContext } from "./contexts/UserContext";
import Event from "./Components/Event";
// import { EventContext } from "./contexts/EventContext";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Header />
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <PublicRoute restricted={true} path="/login" component={Login} />
          <PublicRoute restricted={false} path="/signup" component={Signup} />
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create" component={CreateEvent} />
          <PrivateRoute path="/edit" component={EditEvent} />
          <PrivateRoute exact path="/dashboard/:id" component={Event} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
