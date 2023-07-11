import { Maybe } from '../index.mts'
import { Client, QueryConfig } from 'pg'

export type Migration = {
  up: QueryConfig | string
  down: QueryConfig | string
  timestamp: string
}

export const runMigrations = async (
  migrations: Migration[],
  client: Client,
) => {
  migrations.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))

  for (const migration of migrations) {
    const { up, down } = migration

    try {
      await client.query(up)
    } catch (error) {
      await client.query(down)
      return {
        success: false,
        error,
      } as Maybe<void>
    }
  }

  return {
    success: true,
  } as Maybe<void>
}
