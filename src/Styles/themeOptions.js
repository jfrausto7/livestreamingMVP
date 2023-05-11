import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3B93FF",
    },
    secondary: {
      main: "#ffa73b",
      light: "#ffea00",
    },
    info: {
      main: "#03a9f4",
    },
  },
  shape: {
    pillRadius: 50,
  },
});
