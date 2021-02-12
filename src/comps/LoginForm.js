import React, { useState } from "react";

// import { Formik, Field, Form } from "formik";
import { projectAuth } from "../firebase/config";
import { useHistory } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Button,
  Input,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";
const LoginForm = ({ setIsValid }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handelSignInSubmit = (e) => {
    e.preventDefault();
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsValid(true);
        // console.log(isValid);
        history.push("/admin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  // const handelSignUpSubmit = (e) => {
  //   e.preventDefault();
  //   const user = { email, password };
  //   signUp(user);
  // };
  return (
    <div>
      <div>
        <h2>Login</h2>
        {/* <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={() => {
            console.log("form submit");
            useAuth(email);
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <label htmlFor="password">password</label>
            <Field type="password" name="password" />
            <button type="submit">submit</button>
          </Form>
        </Formik> */}
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
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default LoginForm;
