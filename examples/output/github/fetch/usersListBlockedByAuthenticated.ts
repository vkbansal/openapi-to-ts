/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersListBlockedByAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function usersListBlockedByAuthenticated(props: UsersListBlockedByAuthenticatedProps) {
	const { ...rest } = props;

	const response = await fetch(`/user/blocks`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}