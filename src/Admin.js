import React, { useState } from "react";
import LoginForm from "./comps/LoginForm";
import firebase from "firebase/app";
import "firebase/auth";
import UploadForm from "./comps/UploadForm";
import DashBoardTitle from "./comps/DashboardTitle";
import { Box } from "@chakra-ui/react";

const Admin = () => {
  const [isValid, setIsValid] = useState(false);
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsValid(true);
    }
  });
  return (
    <div className="Admin">
      {!isValid && <LoginForm />}
      <Box m={2}>
        {isValid && <DashBoardTitle setIsValid={setIsValid} />}
        {isValid && <UploadForm />}
      </Box>
    </div>
  );
};

export default Admin;
