import { UserInsert } from './types.mts'
import { Statement } from '@libs/orm'

export const insertUserQuery: Statement<UserInsert> = (params) => {
  const { username, email, role, password, manager } = params

  const text = `
        INSERT INTO users (username, email, role, password, manager) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *`

  return {
    text,
    values: [username, email, role, password, manager],
  }
}
