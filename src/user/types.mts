export type UserRole = 'engineer' | 'manager' | 'external'

export type UserInsert = {
  username: string
  email: string
  role: UserRole
  password: string
  manager: string
}

export type User = {
  id: number
  created_at: Date
  last_login: Date
} & UserInsert
