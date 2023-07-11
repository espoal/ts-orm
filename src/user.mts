import { insertUserQuery } from './user/index.mts'
import { User } from './user/types.mjs'
import { client } from '@libs/orm'

const user: User = {
  username: 'test',
  email: 'j@d.e',
  role: 'engineer',
  password: 'test',
  manager: 'test',
}

const result = await client.query(insertUserQuery(user))

console.log({ result })

await client.end()
