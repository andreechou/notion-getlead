// import Head from 'next/head'
import { Center, Heading, Stack, Box, Input, Grid, Text } from "@chakra-ui/react"
import { jsx } from "@emotion/react";
import { Client } from '@notionhq/client'
import { useEffect } from "react";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId  = process.env.NOTION_DATABASE_ID;

async function addLead({ title, email }) {
  try {
    await notion.pages.create({
      parent: {
        database_id: databaseId
      },
      properties: {
        [process.env.NOTION_TITLE_ID]: {
          title: [
            {
              type: "text", 
              text: {
                content: title
              }
            }
          ]
        },
        Email: {
          rich_text: [
            {
              type: "text",
              text: {
                content: email
              }
            }
          ]
        }
      }
    })
  } catch (error) {
    console.error(error.body)
  }
};

addLead({ title: "Rafael Ponzini", email: "rafael.ponzini@rga.com"});


export default function Home({ results }) {
  // useEffect(() => {
  //   console.log(results);
  // })

  // const getDatabaseDisplay = () => {
  //   let jsx = [];
  //   results.forEach((person) => {
  //     jsx.push(
  //       <Box w="100%" p="8" bg="base.white">
  //         <Heading as="h4" size="md">{person.properties.Name.title[0].plain_text}</Heading>
  //         <Text>{person.properties.Email.rich_text[0].plain_text}</Text>
  //       </Box>
  //     );
  //   });
  //   return jsx;
  // }
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
      {/* <Center bg="primary.normal" m="2" p="16">
        <Box>
          <Heading mb="8" color="base.white">Who is interesting?</Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {getDatabaseDisplay()}
          </Grid>
        </Box>
      </Center> */}
    </>
  )
}


// export async function getStaticProps() {
//   const response  = await notion.databases.query({
//     database_id: databaseId
//   });

//   console.log(response);

//   return {
//     props: {
//       results: response.results,
//     }
//   }
// }