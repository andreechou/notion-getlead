// import Head from 'next/head'
import { Center, Heading, Stack, Box, Input } from "@chakra-ui/react"

export default function Home() {
  return (
    <Center bg="primary.light" m="2" p="8">
      <Box>
        <Heading>Let you know when we launch!</Heading>
        <Stack spacing={2}>
          <Input placeholder="Name" size="md" bg="white" />
          <Input placeholder="Email" size="md" bg="white" />
        </Stack>
      </Box>
    </Center>
  )
}
