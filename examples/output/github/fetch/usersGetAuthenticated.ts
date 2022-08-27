export interface UsersGetAuthenticatedProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function usersGetAuthenticated(props: UsersGetAuthenticatedProps) {
	const { ...rest } = props;

	const response = await fetch(`/user`, {
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
