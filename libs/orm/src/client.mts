import pg from 'pg'

const { Client } = pg

const client = new Client({
  user: 'postgres',
  password: 'example',
})
await client.connect()

export { client }
