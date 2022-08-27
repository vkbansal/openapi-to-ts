export interface UsersGetByUsernamePathParams {
	username: string;
}

export interface UsersGetByUsernameProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersGetByUsernamePathParams {}

export async function usersGetByUsername(props: UsersGetByUsernameProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/users/${username}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
