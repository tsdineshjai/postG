import { getClient } from "./utils";

async function insertData() {
	const client = await getClient();

	const createInsertInUsersQuery = `INSERT INTO users (email, password) VALUES($1, $2) RETURNING id`;
	const inserValuesArray = ["maserelsfsfsdf@gmail.com", "thisISDummyPassword"];
	let response = await client.query(createInsertInUsersQuery, inserValuesArray);

	const insertTodoText =
		"INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id";

	const todoValues = [
		"Buy everything that you need",
		"Milk, bread, and eggs, discipline and consistency",
		response.rows[0].id,
		false,
	];

	await client.query(insertTodoText, todoValues);

	console.log(`entries were created`);
}

insertData();
