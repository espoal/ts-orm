import { Client, QueryConfig } from 'pg'

export type QueryResult<T> = {
  success: boolean
  error?: string
  data?: T
}

export type Statement<T> = (params: T) => QueryConfig

export type QueryRunner<T> = (query: QueryConfig, client: Client) => Promise<QueryResult<T>>

export const QueryRunner = async <T extends unknown[],>(query: QueryConfig<T>, client: Client) => {
  try {

    const result = await client.query(query)

    return {
        success: true,
        error: null,
        data: result.rows,
    }

  } catch (error) {

    return {
        success: false,
        error,
        data: null,
    }
  }
}
