export interface UsersCheckPersonIsFollowedByAuthenticatedPathParams {
	username: string;
}

export interface UsersCheckPersonIsFollowedByAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersCheckPersonIsFollowedByAuthenticatedPathParams {}

export async function usersCheckPersonIsFollowedByAuthenticated(
	props: UsersCheckPersonIsFollowedByAuthenticatedProps,
) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/following/${username}`, {
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
