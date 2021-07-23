import axios from 'axios'

const client = axios.create({ url: '/' })

export const addTodo = async (text) => {
  const { data } = await client.patch('/api/notion', { text })
  return data
}