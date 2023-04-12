import React from "react";
import SearchBar from "./SearchBar";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../videoUtil";
function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#FAF9F6",
        top: 0,
        justifyContent: "space-between",
        pointer: "cursor",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <div style={{ marginLeft: "10px" }}>My tube</div>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
