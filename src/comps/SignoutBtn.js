import { Button } from "@chakra-ui/react";
import React from "react";
import { projectAuth } from "../firebase/config";
const SignoutBtn = ({ setIsValid }) => {
  const handelSignout = () => {
    projectAuth
      .signOut()
      .then(() => {
        setIsValid(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Button onClick={handelSignout}>Signout</Button>;
};

export default SignoutBtn;
