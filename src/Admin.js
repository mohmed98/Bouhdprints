import React, { useState } from "react";
import LoginForm from "./comps/LoginForm";

import UploadForm from "./comps/UploadForm";

const Admin = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="App">
      {!isValid && <LoginForm setIsValid={setIsValid} />}
      {isValid && <UploadForm isValid={isValid} />}
    </div>
  );
};

export default Admin;
