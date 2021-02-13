import React, { useState } from "react";

// import { Formik, Field, Form } from "formik";
import { projectAuth } from "../firebase/config";

import {
  FormControl,
  FormLabel,
  Button,
  Input,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";
import Title from "./Title";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSignInSubmit = (e) => {
    e.preventDefault();
    projectAuth.signInWithEmailAndPassword(email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  };

  return (
    <div className="Home">
      <Title />
      <h2>Login</h2>
      <form onSubmit={handelSignInSubmit}>
        <FormControl>
          <FormLabel>email</FormLabel>
          <Input onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <Input onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
