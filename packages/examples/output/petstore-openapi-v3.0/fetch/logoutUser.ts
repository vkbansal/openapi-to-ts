export interface LogoutUserProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function logoutUser(props: LogoutUserProps) {
	const { ...rest } = props;

	const response = await fetch(`/user/logout`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
