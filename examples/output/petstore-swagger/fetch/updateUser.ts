export interface UpdateUserPathParams {
	username: string;
}

export interface UpdateUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UpdateUserPathParams {}

export async function updateUser(props: UpdateUserProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/${username}`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}
