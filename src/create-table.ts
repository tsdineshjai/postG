import { getClient } from "./utils";

async function createTable() {
	const client = await getClient();

	const createTableUserQuery = `
      CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(256) UNIQUE NOT NULL,
      password VARCHAR(25) NOT NULL )`;

	await client.query(createTableUserQuery);

	const createTodosTableQuery = `CREATE TABLE todos (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      user_id INTEGER REFERENCES users(id),
      done BOOLEAN DEFAULT FALSE

  )`;

	await client.query(createTodosTableQuery);

	console.log("Table created successfully!");
}

createTable();
