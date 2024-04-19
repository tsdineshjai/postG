import { getClient } from "./utils";

async function getUsers() {
	const client = await getClient();

	const getUsersQuery = `SELECT * FROM users`;

	const result = await client.query(getUsersQuery);

	for (let x of result.rows) {
		console.log(`the user id is ${x.id} and mail is ${x.email}`);
	}
}
