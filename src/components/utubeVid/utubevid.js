import youtube from "./request";
import VideoBox from "./videoBox";
import "./utubevid.css";

import { useState } from "react";
export default function Utubevid() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const getVideos = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
    console.log(videos);
  };

  return (
    <div className="utube_main">
      <h2 className="utube_title">Search your favorite videos</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          id="search_val"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            const searchVal = document.querySelector("#search_val").value;
            getVideos(searchVal);
          }}
        >
          Search
        </button>
      </form>
      <div className="utube_result">
        {videos.map((video) => (
          <VideoBox key={video.etag} {...video} />
        ))}
      </div>
    </div>
  );
}
