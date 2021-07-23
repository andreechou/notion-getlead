// import Head from 'next/head'
import { Center, Heading, Stack, Box, Input, Grid, Text } from "@chakra-ui/react"
import { jsx } from "@emotion/react";
import { Client } from '@notionhq/client'
import { useEffect } from "react";


export default function Home({ results }) {
  useEffect(() => {
    console.log(results);
  })

  const getDatabaseDisplay = () => {
    let jsx = [];
    results.forEach((person) => {
      jsx.push(
        <Box w="100%" h="10" bg="base.white">
          <Heading as="h4" size="md">{personalbar.properties.Name.title[0].plain_text}</Heading>
          <Text>{personalbar.properties.Email.title[0].plain_text}</Text>
        </Box>
      );
    });
    return jsx;
  }
  return (
    <>
      <Center bg="primary.light" m="2" p="16">
        <Box>
          <Heading mb="8">Let you know when we launch!</Heading>
          <Stack spacing={2}>
            <Input placeholder="Name" size="md" bg="white" />
            <Input placeholder="Email" size="md" bg="white" />
          </Stack>
        </Box>
      </Center>
      <Center bg="primary.normal" m="2" p="16">
        <Box>
          <Heading mb="8">Who is interesting?</Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {getDatabaseDisplay()}
          </Grid>
        </Box>
      </Center>
    </>
  )
}


export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const databaseId  = process.env.NOTION_DATABASE_ID;
  const response  = await notion.databases.query({
    database_id: databaseId
  });

  console.log(response);

  return {
    props: {
      results: response.results,
    }
  }
}