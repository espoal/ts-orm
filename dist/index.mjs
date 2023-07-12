// src/pkgs/customers/addCustomer.query.mts
var addCustomerQuery = async (user, client2) => {
  const { username, email, customerType, password, referral } = user;
  const text = `
        INSERT INTO customers (username, email, customerType, password, referral) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *`;
  const values = [username, email, customerType, password, referral];
  const result2 = await client2.query({ text, values });
  const { rows, fields } = result2;
  console.log({ result: result2, rows, fields });
  return {
    success: true
  };
};

// libs/orm/src/client.mts
import pg from "pg";
var { Client } = pg;
var clientFactory = async (config) => {
  const client2 = new Client(config);
  await client2.connect();
  return client2;
};

// src/index.mts
var client = await clientFactory({
  user: "postgres",
  password: "example"
});
var index = {
  username: "testa",
  email: "j@d.ej",
  customerType: "reseller",
  password: "test",
  referral: "test"
};
var result = await addCustomerQuery(index, client);
console.log({ result });
await client.end();
