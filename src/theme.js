import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3E8A53",
      //   light: "#A9F291",
      //   dark: "#002984",
      //   contrastText: "#fff",
    },
    secondary: {
      main: "#A9F291",
      //   light: "#ff5983",
      //   dark: "#bb002f",
      //   contrastText: "#000",
    },
    //     error: {
    //       main: "#f44336",
    //     },
    //     warning: {
    //       main: "#ff9800",
    //     },
    //     info: {
    //       main: "#2196f3",
    //     },
    //     success: {
    //       main: "#4caf50",
    //     },
    // background: {
    //   default: "#3E8A53",
    //   paper: "#fff",
    // },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
  },
});

export default theme;
