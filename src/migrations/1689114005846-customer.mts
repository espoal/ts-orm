import { Migration } from '@libs/orm'

const up: string = `
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
    );`

const down: string = `
    DROP TABLE IF EXISTS users;
    DROP TYPE IF EXISTS role;`

export const migration_1689114005846_customer: Migration = {
  up,
  down,
  timestamp: '1689114005846',
}
