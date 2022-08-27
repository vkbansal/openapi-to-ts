export interface UpdateUserPathParams {
	username: string;
}

export type UpdateUserRequestBody = User;

export interface UpdateUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UpdateUserPathParams {
	body: UpdateUserRequestBody;
}

export async function updateUser(props: UpdateUserProps) {
	const { username, body, ...rest } = props;

	const response = await fetch(`/user/${username}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
