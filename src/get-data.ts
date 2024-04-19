import { getClient } from "./utils";

async function getUsers() {
	const client = await getClient();

	const getUsersQuery = `SELECT * FROM users`;

	const result = await client.query(getUsersQuery);

	for (let x of result.rows) {
		console.log(`the user id is ${x.id} and mail is ${x.email}`);
	}
}

//get a particular user via email

async function getUserViaEmail(email: string) {
	const client = await getClient();

	const queryforUser = `SELECT * FROM users WHERE email = $1`;
	const result = await client.query(queryforUser, [email]);
	for (let user of result.rows) {
		console.log(`id:${user.id} : mail:${user.email}`);
	}
}

async function getTodosForUser(userId: number) {
	const client = await getClient();

	const queryTodosUser = `SELECT * FROM todos WHERE user_id=$1`;
	const response = await client.query(queryTodosUser, [userId]);

	for (let todoUser of response.rows) {
		console.log(
			`title :${todoUser.title} , description : ${todoUser.description}`
		);
	}
}

getUsers();

getUserViaEmail("maserelsfsfsdf@gmail.com");

getTodosForUser(1);

//output
/* 
title :Buy groceries , description : Milk, bread, and eggs
id:3 : mail:maserelsfsfsdf@gmail.com
the user id is 1 and mail is tanishkasri1231@gmail.com
the user id is 3 and mail is maserelsfsfsdf@gmail.com
*/
