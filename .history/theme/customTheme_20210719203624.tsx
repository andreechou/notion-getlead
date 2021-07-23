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
    darkest-gray: "#323232"
  }
}
const theme = extendTheme({ colors })

export default theme;