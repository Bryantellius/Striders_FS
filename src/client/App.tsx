import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SingleEntry from "./views/SingleEntry";
import Home from "./views/Home";
import Add from "./views/Add";
import Edit from "./views/Edit";

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
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
      </Switch>
    </BrowserRouter>
  );
};

export interface AppProps {}

export default App;
