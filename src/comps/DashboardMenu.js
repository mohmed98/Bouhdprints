import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

const DashboardMenu = () => {
  let { url } = useRouteMatch();

  return (
    <div>
      <Menu autoSelect={false}>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={`${url}/uploadform`}>Upload single image</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`${url}/deletephoto`}>delete photo</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default DashboardMenu;
