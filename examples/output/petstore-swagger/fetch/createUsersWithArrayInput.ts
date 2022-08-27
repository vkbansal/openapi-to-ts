export interface CreateUsersWithArrayInputProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function createUsersWithArrayInput(props: CreateUsersWithArrayInputProps) {
	const { ...rest } = props;

	const response = await fetch(`/user/createWithArray`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
