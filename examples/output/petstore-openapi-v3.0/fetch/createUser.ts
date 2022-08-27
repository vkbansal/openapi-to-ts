export type CreateUserRequestBody = User;

export interface CreateUserProps extends Omit<RequestInit, 'method' | 'body'> {
	body: CreateUserRequestBody;
}

export async function createUser(props: CreateUserProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/user`, {
		method: 'POST',
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
