import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, SideBar } from "./";
import { videoData } from "../videoUtil";

const SideAndContent = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    setVideos(videoData);
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2023
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        ></Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SideAndContent;
