import { Client } from '@notionhq/client'
import NextCors from 'nextjs-cors';

async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

   // Rest of the API logic
   res.json({ message: 'Hello NextJs Cors!' });
}

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
addLead({ title: "Rafael Ponzini", email: "rafael.ponzini@rga.com"});
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