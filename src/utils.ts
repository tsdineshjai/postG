import pg from "pg";

const { Client } = pg;

export async function getClient() {
	const client = new Client(
		"postgres://zrvtzdte:wPhkblpn-tyhUJOIc-f-ssK6Q9jI-XHQ@arjuna.db.elephantsql.com/zrvtzdte"
	);
	await client.connect();
	return client;
}
