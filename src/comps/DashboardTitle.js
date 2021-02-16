import React from "react";
import { Center, Heading, Flex, Spacer } from "@chakra-ui/react";
import DashboardMenu from "./DashboardMenu";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
const DashBoardTitle = ({ setIsValid }) => {
  return (
    <>
      <Flex mb={2}>
        <DashboardMenu p={4} />
        <Spacer />
        <Center>
          <Heading size="md">
            <Link to="/admin">Dashboard</Link>
          </Heading>
        </Center>
        <Spacer />

        <AccountMenu setIsValid={setIsValid} />
      </Flex>
    </>
  );
};

export default DashBoardTitle;
