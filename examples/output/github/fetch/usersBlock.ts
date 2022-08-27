export interface UsersBlockPathParams {
	username: string;
}

export interface UsersBlockProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersBlockPathParams {}

export async function usersBlock(props: UsersBlockProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/blocks/${username}`, {
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
