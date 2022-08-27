export interface UsersAddEmailForAuthenticatedRequestBody {}

export interface UsersAddEmailForAuthenticatedProps extends Omit<RequestInit, 'method' | 'body'> {
	body: UsersAddEmailForAuthenticatedRequestBody;
}

export async function usersAddEmailForAuthenticated(props: UsersAddEmailForAuthenticatedProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/emails`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
