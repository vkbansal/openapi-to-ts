export interface UsersCheckFollowingForUserPathParams {
	username: string;
	target_user: string;
}

export interface UsersCheckFollowingForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersCheckFollowingForUserPathParams {}

export async function usersCheckFollowingForUser(props: UsersCheckFollowingForUserProps) {
	const { username, target_user, ...rest } = props;

	const response = await fetch(`/users/${username}/following/${target_user}`, {
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
