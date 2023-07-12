import { AddCustomerInput, Customer } from './types.mts'
import { Maybe, Query } from '@libs/orm'

export const addCustomerQuery: Query<AddCustomerInput, Customer> = async (
  user,
  client,
) => {
  const { username, email, customerType, password, referral } = user

  const text: string = `
        INSERT INTO customers (username, email, customerType, password, referral) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *`

  const values = [username, email, customerType, password, referral]
  const result = await client.query({ text, values })

  const customer: Customer = result.rows[0]

  return {
    success: true,
    result: customer,
  } as Maybe<Customer>
}
