import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Box } from "@mui/material";

import { Loader } from "./";

const Videos = ({ videos }) => {
  const navigate = useNavigate();
  const [muteFlag, setMuteFlag] = useState(false);

  if (!videos?.length) return <Loader />;

  const playVideo = (e) => {
    e.target.play();
    setMuteFlag(true);
    console.log("on");
  };
  const stopVideo = (e) => {
    e.target.pause();
    console.log("off");
  };
  const goToIndividualPage = (e, id) => {
    console.log("event", e.target.currentTime, "id", id);
    navigate(`/video/${id}?timestamp=${e.target.currentTime}`);
  };
  return (
    <Stack direction="row" gap={2} className="videoWrap">
      {videos?.map((ele, index) => {
        return (
          <Box key={index}>
            <video
              className="videoStyle"
              onClick={(e) => goToIndividualPage(e, ele.personalization_id)}
              controls
              type="video/mp4"
              onMouseOver={(e) => playVideo(e)}
              onMouseOut={(e) => stopVideo(e)}
              src={ele?.url}
              poster={ele?.thumbnail_url}
              preload="none"
              muted={muteFlag}
              loop
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
