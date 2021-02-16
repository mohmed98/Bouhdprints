import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { projectAuth } from "../firebase/config";
const ChangePassword = ({ setIsValid }) => {
  const [error, SetError] = useState(null);
  const [newPass, setNewPass] = useState(null);
  const user = projectAuth.currentUser;
  const changePass = () => {
    if (newPass) {
      user
        .updatePassword(newPass)
        .then(() => {
          console.log("password changed ");
          setIsValid(false);
        })
        .catch((error) => {
          const errorMsg = error.message;
          SetError(errorMsg);
        });
    } else {
      SetError("password cannot be empty");
    }
  };
  return (
    <>
      <Container centerContent>
        <Heading>Change password</Heading>
        <Box mt="5">
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
          <form>
            <FormControl>
              <FormLabel htmlFor="newPassword">New Password</FormLabel>
              <Input
                type="password"
                id="newPassword"
                onChange={(e) => setNewPass(e.target.value)}
              />
            </FormControl>
            <Button onClick={changePass} m={1}>
              Update
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default ChangePassword;
