export interface CreateUsersWithListInputProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function createUsersWithListInput(props: CreateUsersWithListInputProps) {
	const { ...rest } = props;

	const response = await fetch(`/user/createWithList`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
