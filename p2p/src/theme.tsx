import { createTheme } from "@mui/material";

export const colors = {
  red: {
    100: "#d5f5e0",
    200: "#abebc1",
    300: "#81e2a3",
    400: "#57d884",
    500: "#ed3621",
    600: "#24a551",
    700: "#1b7c3d",
    800: "#125228",
    900: "#092914",
  },
  lightBlue: {
    100: "#d2eafb",
    200: "#a6d5f8",
    300: "#79c0f4",
    400: "#4dabf1",
    500: "#2096ed",
    600: "#1a78be",
    700: "#135a8e",
    800: "#0d3c5f",
    900: "#061e2f",
  },
  input: {
    100: "#d3d6da",
    200: "#a7aeb5",
    300: "#7b8591",
    400: "#4f5d6c",
    500: "#233447",
    600: "#1c2a39",
    700: "#151f2b",
    800: "#0e151c",
    900: "#070a0e",
  },
  background: {
    100: "#ed3621",
    200: "#ed3621",
    300: "#ed3621",
    400: "#ed3621",
    500: "#ed3621",
    600: "#ed3621",
    700: "#ed3621",
    800: "#ed3621",
    900: "#ed3621",
  },
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
        main: colors.red[500],
    },
    background: {
      default: "#ed3621",
    },
  },
  typography: {
    fontFamily: ["sans-serif"].join(" "),
  },
});
