export interface GetUserByNamePathParams {
	username: string;
}

export interface GetUserByNameProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GetUserByNamePathParams {}

export async function getUserByName(props: GetUserByNameProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/${username}`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
