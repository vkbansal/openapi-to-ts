export interface UsersFollowPathParams {
	username: string;
}

export interface UsersFollowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersFollowPathParams {}

export async function usersFollow(props: UsersFollowProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/following/${username}`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
