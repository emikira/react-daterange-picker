import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    palette: {
      common: { black: "#000", white: "#fff" },
      type: "dark",
      primary: {
        main: "#FF9167",
        light: "rgb(255, 174, 143)",
        dark: "#FF9167",
        contrastText: "rgba(0, 0, 0, 0.87)"
      },
      secondary: {
        main: "#f48fb1",
        light: "rgb(246, 165, 192)",
        dark: "rgb(170, 100, 123)",
        contrastText: "rgba(0, 0, 0, 0.87)"
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff"
      },
      grey: {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        A100: "#d5d5d5",
        A200: "#aaaaaa",
        A400: "#303030",
        A700: "#616161"
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        hint: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#424242",
        default: "#121212"
      },
      action: {
        active: "#fff",
        hover: "rgba(255, 255, 255, 0.1)",
        hoverOpacity: 0.1,
        selected: "rgba(255, 255, 255, 0.2)",
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)"
      },
    },
    props: {
      MuiButtonBase: {
          disableRipple: true, // No more ripple, on the whole application 💣!
      }
    }
});