import pg from "pg";

const { Client } = pg;

export async function getClient() {
	const client = new Client(
		"postgres://bcezpjoa:XwXwHIOU2A4LSgcnNnls934TgqmxyEDT@arjuna.db.elephantsql.com/postGDatabase"
	);
	await client.connect();
	return client;
}
