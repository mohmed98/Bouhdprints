import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { projectAuth } from "../firebase/config";
import { Link, useRouteMatch } from "react-router-dom";

const AccountMenu = ({ setIsValid }) => {
  let { url } = useRouteMatch();

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
            <Link to={`${url}/changepassword`}>Change password</Link>
          </MenuItem>
          <MenuItem onClick={handelSignout}>sign out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default AccountMenu;
