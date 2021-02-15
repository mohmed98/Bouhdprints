import React, { useState } from "react";
import LoginForm from "./comps/LoginForm";
import firebase from "firebase/app";
import "firebase/auth";
import UploadForm from "./comps/UploadForm";
import DashBoardTitle from "./comps/DashboardTitle";
import { Box } from "@chakra-ui/react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const Admin = () => {
  const [isValid, setIsValid] = useState(false);
  let { path } = useRouteMatch();
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsValid(true);
    }
  });
  return (
    <div className="Admin">
      {!isValid && <LoginForm />}
      {isValid && (
        <Box m={2}>
          <DashBoardTitle setIsValid={setIsValid} />
          <Switch>
            <Route exact path={path}>
              <h2>main</h2>
            </Route>
            <Route path={`${path}/uploadform`}>
              <UploadForm />
            </Route>
            <Route path={`${path}/deletephoto`}>
              <h2>Dete photo</h2>
            </Route>
          </Switch>
        </Box>
      )}
    </div>
  );
};

export default Admin;
