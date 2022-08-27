export interface UsersUnblockPathParams {
	username: string;
}

export interface UsersUnblockProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersUnblockPathParams {}

export async function usersUnblock(props: UsersUnblockProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/blocks/${username}`, {
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
