import {
  Box,
  FormControl,
  Container,
  Heading,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProgressBar from "./progressBar";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
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
    <>
      <Container>
        <Box>
          <Heading size="md" textAlign="center" mb={4}>
            Upload single image
          </Heading>
          <form>
            <FormControl>
              <FormLabel htmlFor="image">Choose Image</FormLabel>
              <Input
                type="file"
                onChange={changeHandler}
                variant="unstyled"
                p={1}
              />
              <div>
                <div>{error && <div>{error}</div>}</div>
                <div>{file && <div>{file.name}</div>}</div>
                {file && <ProgressBar file={file} setFile={setFile} />}
              </div>
            </FormControl>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default UploadForm;
