export interface UsersCheckBlockedPathParams {
	username: string;
}

export interface UsersCheckBlockedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersCheckBlockedPathParams {}

export async function usersCheckBlocked(props: UsersCheckBlockedProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/blocks/${username}`, {
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
