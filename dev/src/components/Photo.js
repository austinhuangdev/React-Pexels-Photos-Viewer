import React from "react";

const Photo = ({ data }) => {
  return (
    <div className="photo">
      <p className="photographer">{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt={data.photographer} />
      </div>
      <div className="download">
        <p>
          在此下載圖片：
          <a
            href={data.src.large}
            target="_blank"
            rel="noopener noreferrer"
            className="downloadLink"
          >
            Download
          </a>
        </p>
      </div>
    </div>
  );
};

export default Photo;
