import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
