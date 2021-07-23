import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId  = process.env.NOTION_DATABASE_ID;

export default async (req, res) => {
  const data = await notion.pages.create({
    parent: {
      database_id: databaseId
    },
    properties: { 
      Name: {
        title: [{
          text: {
            content: req.body.text
          }
        }]
      }
    }
  })
}

