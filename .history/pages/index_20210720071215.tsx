// import Head from 'next/head'
import React from "react"
import { useMutation, useQueryClient } from 'react-query'
import { Center, Heading, Stack, Box, Input, Grid, Text, Button } from "@chakra-ui/react"
// import addLead from "./api/notion"

import * as api from './api'

export default function Home() {
  const [nameField, setNameField] = React.useState("");
  const nameChange = (event) => setNameField(event.target.value);

  const [emailField, setEmailField] = React.useState("");
  const emailChange = (event) => setEmailField(event.target.value);

  const addTodo = useMutation(api.addTodo, {
    onSuccess: () => {
      setText('')
      queryClient.invalidateQueries('todos')
    },
  })

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