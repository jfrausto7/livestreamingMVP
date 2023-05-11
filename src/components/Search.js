import { React } from "react";
import { Box, Grid, Stack } from "@mui/material";
import ZipCodeInput from "../components/ZipCodeInput";
import SearchButtons from "./SearchButtons";
import { StyledBox } from "../Styles/StyledBox";

const Search = () => {
  return (
    <Box
      sx={{
        background: "rgba(192, 192, 192, 0.5)",
        py: "2rem",
        mx: "2rem",
        borderRadius: "0.5rem",
      }}
    >
      <Stack textAlign="start" sx={{ paddingLeft: "3rem" }}>
        <h1 style={{ mb: "0.1rem", color: "#606060", fontSize: "3.6rem" }}>
          Adopt the <span style={{ color: "#ffa73b" }}>perfect pet</span>
        </h1>
        <p style={{ color: "#606060", fontSize: "1.2rem" }}>
          Search adoptable pets from shelters & rescues.
        </p>
      </Stack>
      <StyledBox
        sx={{
          backgroundColor: "#A9B3AC",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item sx={{ background: "" }}>
            <SearchButtons />
          </Grid>
          <Grid item sx={{ background: "" }}>
            <ZipCodeInput />
          </Grid>
        </Grid>
      </StyledBox>
    </Box>
  );
};
export default Search;
