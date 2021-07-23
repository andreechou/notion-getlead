// import Head from 'next/head'
import React from "react"
import { Center, Heading, Stack, Box, Input, Grid, Text, Button } from "@chakra-ui/react"
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

function babaOvo () {
  console.log("babaovo")
}

addLead({ title: "Rafael Ponzini", email: "rafael.ponzini@rga.com"});


export default function Home() {
  const [nameField, setNameField] = React.useState("");
  const nameChange = (event) => setNameField(event.target.value)

  const [emailField, setEmailField] = React.useState("");
  const emailChange = (event) => setEmailField(event.target.value)

  return (
    <>
      <Center bg="primary.light" m="2" p="16">
        <Box>
          <Heading mb="8">Let you know when we launch!</Heading>
          <Stack spacing={2}>
            <Input value={nameField} onChange={nameChange} placeholder="Name" size="md" bg="white" />
            <Input value={emailField} onChange={emailChange} placeholder="Email" size="md" bg="white" />
            <Text>{nameField}</Text>
            <Text>{emailField}</Text>
            <Button bg="primary.normal" onClick={() => addLead({ title: "Rafael Ponzini", email: "rafael.ponzini@rga.com"})}>Button</Button>
          </Stack>
        </Box>
      </Center>
    </>
  )
}