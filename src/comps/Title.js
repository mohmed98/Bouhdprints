import React from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div className="title">
      <Link to="/">
        <h1>Bouhdprints</h1>
      </Link>
      <h2>𝙴𝚍𝚒𝚝𝚘𝚛 / 𝚌𝚘𝚕𝚘𝚛𝚒𝚜𝚝</h2>
      <p>THE COOLEST BROTHER.</p>
    </div>
  );
};

export default Title;
