export * from './src/client.mts'
export * from './src/query.mts'
export * from './src/migration.mts'

export type Maybe<T> = {
  success: boolean
  error?: string
  result?: T
}

