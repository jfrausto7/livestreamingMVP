import React from "react";
import { Box } from "@mui/material";
import AboutMissionBox from "../components/AboutMissionBox";
import AboutImageTextLayout from "../components/AboutImageTexLayout";

const About = () => {
  return (
    <Box
      sx={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        color: "#606060",
      }}
    >
      <AboutMissionBox />
      <AboutImageTextLayout />
    </Box>
  );
};

export default About;
