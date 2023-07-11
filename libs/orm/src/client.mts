import pg, { ClientConfig } from 'pg'

const { Client } = pg
export const clientFactory = async (config: ClientConfig) => {
  const client = new Client(config)

  await client.connect()

  return client
}
