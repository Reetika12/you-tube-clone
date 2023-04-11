import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { videoData } from "../videoUtil";

function IndividualVideo() {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(
    "query",
    window.location.search,
    "timestamp",
    searchParams.get("timestamp")
  );

  useEffect(() => {
    console.log(videoData);
    let filteredData = videoData.filter((ele) => ele.personalization_id == id);
    console.log("filtered", filteredData);
    setVideo(filteredData[0]);
  }, []);

  const playVideo = (e) => {
    e.target.currentTime = searchParams.get("timestamp");
    e.target.play();
    console.log("on");
  };
  const stopVideo = (e) => {
    e.target.pause();
    console.log("off");
  };
  console.log("id", id);

  return (
    <div>
      <video
        className="individualHover"
        controls
        type="video/mp4"
        onMouseOver={(e) => playVideo(e)}
        onMouseOut={(e) => stopVideo(e)}
        src={video?.url}
        poster={video?.thumbnail_url}
        preload="none"
        loop
      />
    </div>
  );
}

export default IndividualVideo;
