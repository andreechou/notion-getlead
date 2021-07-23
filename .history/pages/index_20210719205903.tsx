// import Head from 'next/head'
import { Center, Heading, Stack, Box, Input } from "@chakra-ui/react"
import { Client } from '@notionhq/client'


export default function Home() {
  return (
    <Center bg="primary.light" m="2" p="16">
      <Box>
        <Heading mb="8">Let you know when we launch!</Heading>
        <Stack spacing={2}>
          <Input placeholder="Name" size="md" bg="white" />
          <Input placeholder="Email" size="md" bg="white" />
        </Stack>
      </Box>
    </Center>
  )
}


export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const databaseId  = process.env.NOTION_DATABASE_ID;
  const response  = await notion.databases.query({
    database_id: databaseId
  });

  console.log(response);
}