export interface UsersUnfollowPathParams {
	username: string;
}

export interface UsersUnfollowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersUnfollowPathParams {}

export async function usersUnfollow(props: UsersUnfollowProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/following/${username}`, {
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
