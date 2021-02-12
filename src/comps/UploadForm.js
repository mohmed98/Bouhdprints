import React, { useState } from "react";
import ProgressBar from "./progressBar";
const UploadForm = (isValid) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  // console.log(isValid);
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file(png or jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div>
        <div>{error && <div>{error}</div>}</div>
        <div>{file && <div>{file.name}</div>}</div>
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
