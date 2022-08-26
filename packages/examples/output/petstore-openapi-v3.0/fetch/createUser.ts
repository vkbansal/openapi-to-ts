export interface CreateUserProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function createUser(props: CreateUserProps) {
	const { ...rest } = props;

	const response = await fetch(`/user`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
