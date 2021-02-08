import React, { useState } from "react";
import { signIn, signUp } from "../hooks/useAuth";
// import signUp from "../hooks/useAuth";

import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSignInSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    signIn(user);
  };

  const handelSignUpSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    signUp(user);
  };
  return (
    <div>
      <div>
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
      <div>
        <h2>Sign up</h2>
        <form onSubmit={handelSignUpSubmit}>
          <FormControl>
            <FormLabel>email</FormLabel>
            <Input onChange={(e) => setEmail(e.target.value)} />
            <FormLabel>Password</FormLabel>
            <Input onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
