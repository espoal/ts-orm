import { Maybe } from '../index.mts'
import { Client, QueryConfig } from 'pg'

export type Query<Input, Output> = (
  input: Input,
  client: Client,
) => Promise<Maybe<Output>>
