import { getClient } from "./utils";

async function udpateUser(todoId: number) {
	const client = await getClient();

	const userQuery = `UPDATE todos SET done = $1 WHERE id = $2`;

	await client.query(userQuery, [true, todoId]);

	console.log(`Todo with ID ${todoId} updated to done!`);
}

udpateUser(2);
