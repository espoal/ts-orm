import { addCustomerQuery } from './pkgs/customers/index.mts'
import { AddCustomerInput } from './pkgs/customers/types.mjs'
import { clientFactory } from '@libs/orm'

const client = await clientFactory({
  user: 'postgres',
  password: 'example',
})

const index: AddCustomerInput = {
  username: 'testa',
  email: 'j@d.ej',
  customerType: 'reseller',
  password: 'test',
  referral: 'test',
}

const result = await addCustomerQuery(index, client)

console.log({ result })

await client.end()
