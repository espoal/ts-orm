export const userTableUp = `

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
    );`

export const userTableDown = `
    DROP TABLE IF EXISTS users;
    DROP TYPE IF EXISTS role;`
