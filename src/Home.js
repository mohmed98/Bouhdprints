import React, { useState } from "react";

import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import UploadForm from "./comps/UploadForm";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      {/* <Title /> */}
      {/* <UploadForm /> */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Home;
