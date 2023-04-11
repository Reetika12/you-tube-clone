import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, SideAndContent } from "./Components";
import "./styles.css";
import IndividualVideo from "./Components/IndividualVideo";

export default function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<SideAndContent />} />
          <Route exact path="/video/:id" element={<IndividualVideo />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
