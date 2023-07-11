// src/user/index.mts
var insertUserQuery = (params) => {
  const { username, email, role, password, manager } = params;
  const text = `
        INSERT INTO users (username, email, role, password, manager) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *`;
  return {
    text,
    values: [username, email, role, password, manager]
  };
};

// libs/orm/src/client.mts
import pg from "pg";
var { Client } = pg;
var client = new Client({
  user: "postgres",
  password: "example"
});
await client.connect();

// src/user.mts
var user = {
  username: "test",
  email: "j@d.e",
  role: "engineer",
  password: "test",
  manager: "test"
};
var result = await client.query(insertUserQuery(user));
console.log({ result });
await client.end();
