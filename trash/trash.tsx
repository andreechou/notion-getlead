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






// async function addLead({ title, email }) {
//   try {
//     await notion.pages.create({
//       parent: {
//         database_id: databaseId
//       },
//       properties: {
//         [process.env.NOTION_TITLE_ID]: {
//           title: [
//             {
//               type: "text", 
//               text: {
//                 content: title
//               }
//             }
//           ]
//         },
//         Email: {
//           rich_text: [
//             {
//               type: "text",
//               text: {
//                 content: email
//               }
//             }
//           ]
//         }
//       }
//     })
//   } catch (error) {
//     console.error(error.body)
//   }
// };

// addLead({ title: "Rafael Ponzini", email: "rafael.ponzini@rga.com"});

// async function getServerSideProps() {
//   const response = await notion.pages.create({
//     parent: {
//       database_id: databaseId
//     },
//     properties: {
//       [process.env.NOTION_TITLE_ID]: {
//         title: [
//           {
//             type: "text", 
//             text: {
//               content: "title"
//             }
//           }
//         ]
//       },
//       Email: {
//         rich_text: [
//           {
//             type: "text",
//             text: {
//               content: "email"
//             }
//           }
//         ]
//       }
//     }
//   })
//   return {

//   }
// }
// getServerSideProps();

// async function addLead(text) {
//   try {
//     await notion.request({
//       mode: 'no-cors',
//       path: "pages",
//       method: "POST",
//       body: {
//         parent: { database_id: databaseId },
//         properties: {
//           title: { 
//             title:[
//               {
//                 "text": {
//                   "content": text
//                 }
//               }
//             ]
//           }
//         }
//       },
//     })
//     console.log("Success! Entry added.")
//   } catch (error) {
//     console.error(error.body)
//   }
// } 

// addLead("test");

// function createItem(itemContent) {
//   notion.pages.create({
//     parent: {
//       database_id: databaseId
//     },
//     properties: {
//       title: {
//         title: [
//           {
//             type: 'text',
//             text: {
//               content: itemContent
//             }
//           }
//         ]
//       }

//     }
//   })
// }
// createItem({itemContent: "test"});
// console.log('ovo')

// function createItem() {
//   const registerUser = async event => {
//     // event.preventDefault();

//     const res = await fetch('https://api.notion.com/v1/pages', {
//       body: {
//         parent: { database_id: databaseId },
//         properties: {
//           title: { 
//             title:[
//               {
//                 "text": {
//                   "content": "test"
//                 }
//               }
//             ]
//           }
//         }
//       },
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       method: 'POST'
//     })

//     const result = await res.json();
//     console.log(result)
//   }

//   registerUser();
// }

// createItem();

// export default addLead;