import React from "react";
import myPhoto from "../images/My_photo.JPG";

const About = () => {
  const containerStyle = {
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px" }}>關於我</h2>
      <img src={myPhoto} alt="Austin Huang" className="myPhoto" />
      <p>
        歡迎來到這個使用 React 前端框架，並整合 Pexels.com 的 API
        所打造的圖片網站，可以在這裡瀏覽並搜尋各種精彩圖片，以及探索不同主題和類型的照片集。
      </p>
      <p>如果你有任何問題、建議或合作的機會，請隨時與我聯繫。</p>
      <p>謝謝你來訪，期待與你互動！</p>
    </div>
  );
};

export default About;
