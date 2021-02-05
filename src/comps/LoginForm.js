import React from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const LoginForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <FormControl>
          <FormLabel>email</FormLabel>
          <Input />
          <FormLabel>Password</FormLabel>
          <Input />
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
