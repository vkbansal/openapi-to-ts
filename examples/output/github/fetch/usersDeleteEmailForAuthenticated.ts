export interface UsersDeleteEmailForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function usersDeleteEmailForAuthenticated(
	props: UsersDeleteEmailForAuthenticatedProps,
) {
	const { ...rest } = props;

	const response = await fetch(`/user/emails`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
