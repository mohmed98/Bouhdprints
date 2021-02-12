import React, { useState } from "react";
import LoginForm from "./comps/LoginForm";
import firebase from "firebase/app";
import "firebase/auth";
import UploadForm from "./comps/UploadForm";

const Admin = () => {
  const [isValid, setIsValid] = useState(false);
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsValid(true);
    }
  });
  return (
    <div className="App">
      {!isValid && <LoginForm setIsValid={setIsValid} />}
      {isValid && <UploadForm isValid={isValid} />}
    </div>
  );
};

export default Admin;
