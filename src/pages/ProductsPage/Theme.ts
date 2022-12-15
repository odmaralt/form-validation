import { createTheme } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles";
import { ReactFragment } from "react";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#0991f1",
      dark: "#053e85",
    },
    warning: {
      main: "#e53e3e",
    },
    common: {
      black: "rgb(87, 101, 131)",
      white: "#fff",
    },
  },
});
