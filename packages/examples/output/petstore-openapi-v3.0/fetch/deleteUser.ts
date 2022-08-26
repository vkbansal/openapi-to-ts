export interface DeleteUserPathParams {
	username: string;
}

export interface DeleteUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		DeleteUserPathParams {}

export async function deleteUser(props: DeleteUserProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/${username}`, {
		method: 'DELETE',
		...rest,
	});

	const json = await response.json();

	return json;
}