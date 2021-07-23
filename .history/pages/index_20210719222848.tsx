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
  const nameField = 0

  return (
    <>
      <Center bg="primary.light" m="2" p="16">
        <Box>
          <Heading mb="8">Let you know when we launch!</Heading>
          <Stack spacing={2}>
            <Input value={nameField} placeholder="Name" size="md" bg="white" />
            <Input value={emailField} placeholder="Email" size="md" bg="white" />
          </Stack>
        </Box>
      </Center>
    </>
  )
}