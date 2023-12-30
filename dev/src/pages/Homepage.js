import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Photo from "../components/Photo";
import axios from "axios";

const Homepage = () => {
  // 使用 useState 定義狀態變數
  const [input, setInput] = useState(""); // 搜尋關鍵字
  const [data, setData] = useState(null); // 圖片資料
  const [page, setPage] = useState(1); // 目前頁數

  // Pexels API 的授權碼
  const auth = "6ZeJJw2GgNyTYBxGF1lzdrTDP0nnshVRISUxCeXlJ1uzXRZnwimevArP";

  // 初始圖片資料的 API 網址
  const initialURL = "https://api.pexels.com/v1/curated?page=1&&per_page=15";

  // 根據搜尋關鍵字組合的 API 網址
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&&per_page=15&&page=1`;

  // 定義搜尋函式，根據輸入的 API 網址進行搜尋
  const search = async (url) => {
    // 如果搜尋關鍵字不為空，則使用搜尋網址，否則使用初始網址
    const searchUrl = input !== "" ? url : initialURL;

    // 發送 API 請求
    const result = await axios.get(searchUrl, {
      headers: { Authorization: auth },
    });

    // 更新圖片資料狀態
    setData(result.data.photos);
  };

  // 定義加載更多圖片的函式
  const morePhotos = async () => {
    // 計算下一頁的頁數
    const nowPage = page + 1;

    // 根據是否有搜尋關鍵字組合新的 API 網址
    let newURL;
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${nowPage}&&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&&per_page=15&&page=${nowPage}`;
    }

    // 發送 API 請求
    const result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });

    // 更新圖片資料狀態，將新資料與舊資料串聯
    setData(data.concat(result.data.photos));

    // 更新目前頁數狀態
    setPage(nowPage);
  };

  // 使用 useEffect 鉤子，在組件初次渲染時加載初始圖片資料
  useEffect(() => {
    search(initialURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>首頁</h2>
      {/* 將搜尋和設置輸入的函式傳遞到 Search 組件 */}
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="photos">
        {/* 如果有圖片資料，則顯示圖片 */}
        {data &&
          data.map((d, index) => {
            return <Photo data={d} key={index} />;
          })}
      </div>
      <div className="morePhotos">
        {/* 點擊按鈕時加載更多圖片 */}
        <button onClick={morePhotos}>顯示更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
