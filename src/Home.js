import React, { useState } from "react";

import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="Home">
      <Title />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Home;
