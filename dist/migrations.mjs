// src/migrations/1689114005846-customer.mts
var up = `
    CREATE TYPE customerType AS ENUM ('private', 'business', 'reseller');
    
    CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL,
        customerType customerType NOT NULL,
        referral VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
var down = `
    DROP TABLE IF EXISTS users;
    DROP TYPE IF EXISTS role;`;
var migration_1689114005846_customer = {
  up,
  down,
  timestamp: "1689114005846"
};

// libs/orm/src/client.mts
import pg from "pg";
var { Client } = pg;
var clientFactory = async (config) => {
  const client2 = new Client(config);
  await client2.connect();
  return client2;
};

// libs/orm/src/migration.mts
var runMigrations = async (migrations2, client2) => {
  migrations2.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);
  for (const migration of migrations2) {
    const { up: up2, down: down2 } = migration;
    try {
      await client2.query(up2);
    } catch (error) {
      await client2.query(down2);
      return {
        success: false,
        error
      };
    }
  }
  return {
    success: true
  };
};

// src/migrations.mts
var migrations = [migration_1689114005846_customer];
var client = await clientFactory({
  user: "postgres",
  password: "example"
});
await runMigrations(migrations, client);
await client.end();
