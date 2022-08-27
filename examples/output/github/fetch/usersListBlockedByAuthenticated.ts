export interface UsersListBlockedByAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function usersListBlockedByAuthenticated(props: UsersListBlockedByAuthenticatedProps) {
	const { ...rest } = props;

	const response = await fetch(`/user/blocks`, {
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
