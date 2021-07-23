import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId  = process.env.NOTION_DATABASE_ID;

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

async function addLead(text) {
  try {
    await notion.request({
      mode: 'no-cors',
      path: "pages",
      method: "POST",
      body: {
        parent: { database_id: databaseId },
        properties: {
          title: { 
            title:[
              {
                "text": {
                  "content": text
                }
              }
            ]
          }
        }
      },
    })
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
} 
// addLead({ title: "Rafael Ponzini", email: "rafael.ponzini@rga.com"});
addLead("test");

export default addLead;