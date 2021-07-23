// import Head from 'next/head'
import React from "react"
import { useMutation, useQueryClient } from 'react-query'
import { Center, Heading, Stack, Box, Input, Grid, Text, Button } from "@chakra-ui/react"
import addLead from "./api/notion"
import axios from 'axios'

const client = axios.create({ url: '/' })

export const addTodo = async (text) => {
  const { data } = await client.patch('/api/notion', { text })
  return data
}

export default function Home() {
  const [nameField, setNameField] = React.useState("");
  const nameChange = (event) => setNameField(event.target.value);

  const [emailField, setEmailField] = React.useState("");
  const emailChange = (event) => setEmailField(event.target.value);

  const handleAddTodo = () => {
    addTodo.mutate(nameField)
  }

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
            <Button bg="primary.normal" onClick={handleAddTodo}>Button</Button>
          </Stack>
        </Box>
      </Center>
    </>
  )
}