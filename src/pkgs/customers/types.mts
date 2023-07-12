export type CustomerType = 'private' | 'business' | 'reseller'

export type AddCustomerInput = {
  username: string
  email: string
  customerType: CustomerType
  password: string
  referral: string
}

export type Customer = {
  id: number
  created_at: Date
  last_login: Date
} & AddCustomerInput
