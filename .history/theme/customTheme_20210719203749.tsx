import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    normal: "#EB330F",
    dark: "#5F1610",
    light: "#FBD6CF",
  },
  base: {
    black: "#000000",
    dark: "#222222",
    darkestGray: "#323232",
    darkGray: "#3E3E3E",
    gray: "#717171",
    lightGray: "#AAAAAA",
    lightestGray: "#D2D2D2",
    light: "#F1F1F1",
    white: "#FFFFFF"
  }
}
const theme = extendTheme({ colors })

export default theme;