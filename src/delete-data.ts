import { getClient } from "./utils";

async function deleteTodo(todoId: number) {
	const client = await getClient();

	const deleteQuery = `DELETE FROM todos WHERE id=$1`;

	await client.query(deleteQuery, [todoId]);

	console.log(`todo with the id ${todoId} is deleted successfully `);
}

deleteTodo(1);
