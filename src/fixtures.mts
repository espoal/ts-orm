import { userTableUp } from './fixtures/index.mts'
import { client } from '@libs/orm'

const result = await client.query(userTableUp)
console.log({ result })
await client.end()
