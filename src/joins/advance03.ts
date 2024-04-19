import { getClient } from "../utils";

async function getAllTodosWithUserDetails() {
	const client = await getClient();

	const joinQuery = `
        SELECT todos.*, users.email, users.password
        FROM todos
        JOIN users ON todos.user_id = users.id;
    `;
  //HERE WE ARE RETRIEVING ALL THE TODOS OF EACH USER: WE DIDNT SPECIFY "WHERE" FILTER

	const res = await client.query(joinQuery);
	const results = res.rows;

	console.log("Todos with User Details:", results);
}

getAllTodosWithUserDetails();
