import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { projectAuth } from "../firebase/config";

const AccountMenu = ({ setIsValid }) => {
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
  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton as={Button}>Account</MenuButton>
        <MenuList>
          <MenuItem>
            <h2>change passowrd</h2>
          </MenuItem>
          <MenuItem onClick={handelSignout}>sign out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default AccountMenu;
