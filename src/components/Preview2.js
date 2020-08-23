import React, { useState, useEffect } from "react";
import { convertFileToImage } from "../previewImage";
export const Preview2 = (props) => {
  
  const [urlInfo, setUrlInfo] = useState({url: ''});

  useEffect(() => {
    return () => ''
  })

  const uploadFile = (event) => {
    convertFileToImage(event.target.files[0]).then((result) => {
        setUrlInfo(result);
    })
  };

  return (
    <section>
      <img data-testid="imageFile" src={urlInfo.url} alt="image" />
      <input
        data-testid="inputFile"
        type="file"
        onChange={(event) => uploadFile(event)}
      />
    </section>
  );
};
