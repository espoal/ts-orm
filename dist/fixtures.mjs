// src/fixtures/index.mts
var userTableUp = `

    CREATE TYPE role AS ENUM ('engineer', 'manager', 'external');

    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL,
        role role NOT NULL,
        manager VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

// libs/orm/src/client.mts
import pg from "pg";
var { Client } = pg;
var client = new Client({
  user: "postgres",
  password: "example"
});
await client.connect();

// src/fixtures.mts
var result = await client.query(userTableUp);
console.log({ result });
await client.end();
