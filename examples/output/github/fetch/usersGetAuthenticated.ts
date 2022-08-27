/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersGetAuthenticatedProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function usersGetAuthenticated(props: UsersGetAuthenticatedProps) {
	const { ...rest } = props;

	const response = await fetch(`/user`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
