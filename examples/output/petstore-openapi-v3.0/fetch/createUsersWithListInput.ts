export interface CreateUsersWithListInputRequestBody {}

export interface CreateUsersWithListInputProps extends Omit<RequestInit, 'method' | 'body'> {
	body: CreateUsersWithListInputRequestBody;
}

export async function createUsersWithListInput(props: CreateUsersWithListInputProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/createWithList`, {
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
