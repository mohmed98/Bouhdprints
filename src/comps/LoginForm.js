import React, { useState } from "react";

// import { Formik, Field, Form } from "formik";
import { projectAuth } from "../firebase/config";

import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Center,
  Heading,
  Container,
  Input,
  // Text,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";
import Title from "./Title";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handelSignInSubmit = (e) => {
    e.preventDefault();
    projectAuth.signInWithEmailAndPassword(email, password).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  return (
    <div className="Home">
      <Title />
      <Container centerContent>
        <Box m={4} p={2} maxW="md" w="100%">
          <Heading size="md" textAlign="center" mb={4}>
            Login
          </Heading>
          {error && (
            <Center
              bg="red.50"
              color="red.400"
              border="1px"
              borderColor="red.400"
              p={2}
              m={1}
              borderRadius="md"
              fontWeight="bold"
            >
              {error}
            </Center>
          )}
          <form onSubmit={handelSignInSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                isRequired={true}
                type="email"
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                isRequired={true}
                type="password"
              />
            </FormControl>
            <Button type="submit" colorScheme="green" my={2}>
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default LoginForm;
