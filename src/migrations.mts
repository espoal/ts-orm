import { migration_1689114005846_customer } from './migrations/1689114005846-customer.mjs'
import { clientFactory, runMigrations } from '@libs/orm'

const migrations = [migration_1689114005846_customer]

const client = await clientFactory({
  user: 'postgres',
  password: 'example',
})

await runMigrations(migrations, client)

await client.end()
