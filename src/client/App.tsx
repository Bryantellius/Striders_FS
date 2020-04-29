import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import Add from "./views/Add";
import Edit from "./views/Edit";
import SingleEntry from "./views/SingleEntry";
import UserActivities from "./views/UserActivities";

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/edit/:activityId">
          <Edit />
        </Route>
        <Route path="/activity/:activityId">
          <SingleEntry />
        </Route>
        <Route path="/user_activities/:userId">
          <UserActivities />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export interface AppProps {}

export default App;
