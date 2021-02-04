import React, { useState } from "react";

import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Home;
