import { Client } from '@notionhq/client'

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

export async function getServerSideProps() {
  const response = await notion.pages.create({
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
  } 
}

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