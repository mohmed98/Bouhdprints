import React from "react";
import SignoutBtn from "./SignoutBtn";
const DashBoardTitle = ({ setIsValid }) => {
  return (
    <div>
      <h1>DashBoardTitle</h1>
      <SignoutBtn setIsValid={setIsValid} />
    </div>
  );
};

export default DashBoardTitle;
