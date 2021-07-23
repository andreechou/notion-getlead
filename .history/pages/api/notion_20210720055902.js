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

export default addLead;