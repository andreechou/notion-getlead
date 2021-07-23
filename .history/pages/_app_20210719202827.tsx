import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme/customTheme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ theme }>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp